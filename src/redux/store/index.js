/* eslint-disable no-console */
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Cookies from 'js-cookie';
import compositeReducer, { initialState as defaultState } from '../reducer';
import serialise from '../serialiser/serialise';
import deserialise from '../serialiser/deserialise';

const useStore = () => {
  // Functions
  const getInitialState = () => {
    // If server-side, return default state.
    if (typeof window === 'undefined') return defaultState;
    // Attempt to read state from cookie.
    try {
      const serialisedState = Cookies.getJSON('opz-state');
      // If no state stored in cookie,
      // set cookie and return default state.
      if (!serialisedState) {
        const newSerialisedState = serialise(defaultState);
        Cookies.set('opz-state', newSerialisedState, {
          sameSite: true,
        });
        return defaultState;
      }
      // Otherwise, deserialise stored state...
      const storedState = deserialise(serialisedState);
      // Merge with default state and returned
      const state = {
        ...defaultState,
        ...storedState,
        Pricing: {
          ...defaultState.Pricing,
          ...storedState.Pricing,
        },
      };
      return state;
    } catch (err) {
      console.error(
        `Could not parse state from cookie...\n${
          err.message}`,
      );
      return defaultState;
    }
  };
  const getInitialStore = () => createStore(
    compositeReducer,
    getInitialState(),
    composeWithDevTools(applyMiddleware()),
  );
  // State
  const [store] = React.useState(getInitialStore());
  // Effects
  // - Persist Store
  React.useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      const serialisedState = serialise(state);
      Cookies.set('opz-state', serialisedState, {
        sameSite: true,
      });
    });
  });
  // Return
  return store;
};

export default useStore;
