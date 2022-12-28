import QUANTISED_SCROLL_ACTION_TYPES from '../../actionTypes/QuantisedScroller';

const readPage = (pageId) => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.READ_PAGE,
  payload: { pageId },
});

/**
 * Update the group & index of the 'step'.
 * This refers to the order in which this step occurs within
 * the quantised scrolling animation sequence.
 * @param {string} id ID of the step.
 * @param {number} group Group number this step belongs to.
 * @param {number} index Index of the step within it's group.
 */
const setStepIndex = (id, group, index = 0) => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.SET_STEP_INDEX,
  payload: { id, group, index },
});

const clearStepIndices = () => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.CLEAR_STEP_INDICES,
  payload: {},
});

const readHash = (hash) => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.READ_HASH,
  payload: { hash },
});

const navUp = () => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.NAV_UP,
  payload: { },
});

const navDown = () => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.NAV_DOWN,
  payload: { },
});

const navTo = (stepId) => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.NAV_TO,
  payload: { stepId },
});

const scrollTo = (position) => ({
  type: QUANTISED_SCROLL_ACTION_TYPES.SCROLL_TO,
  payload: { position },
});

const QUANTISED_SCROLLER_ACTIONS = {
  readPage,
  setStepIndex,
  clearStepIndices,
  readHash,
  navUp,
  navDown,
  navTo,
  scrollTo,
};

export default QUANTISED_SCROLLER_ACTIONS;
