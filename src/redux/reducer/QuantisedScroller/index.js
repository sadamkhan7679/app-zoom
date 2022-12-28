/* eslint-disable no-console */
import { Map } from 'immutable';
import QUANTISED_SCROLL_ACTION_TYPES from '../../actionTypes/QuantisedScroller';

export const initialQuantisedScrollerState = {
  stepIndices: Map(),
  pageId: null,
  navId: '',
  scrollPosition: 0,
};

const QuantisedScroller = (state = initialQuantisedScrollerState, action) => {
  // Functions
  const getStepIdByValue = (group, index) => {
    const stepIds = [...state.stepIndices.keys()];
    const foundStepId = stepIds.find((stepId) => {
      const step = state.stepIndices.get(stepId) || null;
      if (step === null) return false;
      const groupMatch = step.group === group;
      const indexMatch = step.index === index;
      return (groupMatch && indexMatch);
    });
    return foundStepId;
  };
  const getGroupSize = (group) => {
    let size = 0;
    const stepIds = [...state.stepIndices.keys()];
    stepIds.forEach((stepId) => {
      const step = state.stepIndices.get(stepId) || null;
      if (step === null) return;
      const groupMatch = step.group === group;
      if (groupMatch) size += 1;
    });
    return size;
  };
  const getGroupCount = () => {
    const groups = [];
    const stepIds = [...state.stepIndices.keys()];
    stepIds.forEach((stepId) => {
      const step = state.stepIndices.get(stepId) || null;
      if (step === null) return;
      const { group } = step;
      if (!groups.includes(group)) groups.push(group);
    });
    return groups.length;
  };
  // Reduce
  switch (action.type) {
    case QUANTISED_SCROLL_ACTION_TYPES.READ_PAGE: {
      const { pageId } = action.payload;
      return {
        ...state,
        pageId,
      };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.SET_STEP_INDEX: {
      const { id, group, index } = action.payload;
      const stepIndices = state.stepIndices.set(id, { group, index });
      return {
        ...state,
        stepIndices,
      };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.CLEAR_STEP_INDICES: {
      return {
        ...state,
        stepIndices: Map(),
      };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.READ_HASH: {
      const { hash } = action.payload;
      const navId = hash.slice(1);
      // Ensure navID exists in steps.
      if (!state.stepIndices.has(navId)) {
        console.warn(
          `Attempted to read navID '${navId}' from URL hash, `
          + 'but no step with said navID exists.',
        );
        return state;
      }
      return { ...state, navId };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.NAV_UP: {
      // Attempt to get currently navigated step from URL path ID (hash).
      // If step does not exist, throw error.
      if (!state.stepIndices.has(state.navId)) {
        console.warn(
          `Attempted to scroll up from step with ID '${state.navId}', `
          + 'but current step ID does not exist.',
        );
        return state;
      }
      const currentStep = state.stepIndices.get(state.navId);
      // Check if at first step of current group.
      // If so, will attempt to navigate to previous group.
      const isFirstStep = currentStep.index === 0;
      if (isFirstStep) {
        const currentGroup = currentStep.group;
        // If currently at first step of first group,
        // then top of page is reached, so do nothing.
        if (currentGroup === 0) return state;
        // Attempt to navigate to first step of previous
        // group.
        //  - Ensure that first step of previous group.
        //    actually exists.
        const previousGroup = currentGroup - 1;
        const previousIndex = 0;
        const previousStepId = getStepIdByValue(previousGroup, previousIndex);
        if (typeof previousStepId === 'undefined' || previousStepId === null) {
          console.warn(
            `Attempted to scroll up from step with ID '${state.navId}', `
            + 'to first step of previous group, but first step of previous '
            + 'group does not exist. '
            + `[PreviousGroup=${previousGroup}, PreviousIndex=${previousIndex}]`
            + `[PreviousStepId=${previousStepId}]`,
          );
          return state;
        }
        //  - Prompt a redirect to previous group first step ID.
        return {
          ...state,
          navId: previousStepId,
        };
      }
      // If not at first step of current group, just navigate to previous
      // step of current group.
      const currentGroup = currentStep.group;
      const previousIndex = currentStep.index - 1;
      const previousStepId = getStepIdByValue(currentGroup, previousIndex);
      // Prompt a redirect to current group previous step ID.
      return {
        ...state,
        navId: previousStepId,
      };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.NAV_DOWN: {
      // Attempt to get currently navigated step from URL path ID (hash).
      // If step does not exist, throw error.
      if (!state.stepIndices.has(state.navId)) {
        console.warn(
          `Attempted to scroll down from step with ID '${state.navId}', `
          + 'but current step ID does not exist.',
        );
        return state;
      }
      const currentStep = state.stepIndices.get(state.navId);
      const currentGroup = currentStep.group;
      // Check if at last step of current group.
      // If so, will attempt to navigate to next group.
      const groupSize = getGroupSize(currentGroup);
      const isLastStep = currentStep.index === groupSize - 1;
      if (isLastStep) {
        // If currently at last step of last group,
        // then bottom of page is reached, so do nothing.
        const groupCount = getGroupCount();
        const atBottom = (currentGroup === groupCount - 1);
        if (atBottom) return state;
        // Attempt to navigate to first step of next
        // group.
        //  - Ensure that first step of next group.
        //    actually exists.
        const nextGroup = currentGroup + 1;
        const nextIndex = 0;
        const nextStepId = getStepIdByValue(nextGroup, nextIndex);
        if (typeof nextStepId === 'undefined' || nextStepId === null) {
          console.warn(
            `Attempted to scroll down from step with ID '${state.navId}', `
            + 'to first step of next group, but first step of next '
            + 'group does not exist. '
            + `[NextGroup=${nextGroup}, NextIndex=${nextIndex}]`
            + `[NextStepID=${nextStepId}]`,
          );
          return state;
        }
        //  - Prompt a redirect to previous group first step ID.
        return {
          ...state,
          navId: nextStepId,
        };
      }
      // If not at first step of current group, just navigate to previous
      // step of current group.
      const nextIndex = currentStep.index + 1;
      const nextStepId = getStepIdByValue(currentGroup, nextIndex);
      // Prompt a redirect to current group previous step ID.
      return {
        ...state,
        navId: nextStepId,
      };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.NAV_TO: {
      const { stepId } = action.payload;
      if (
        typeof stepId === 'undefined'
        || stepId === null
        || !state.stepIndices.has(stepId)
      ) {
        console.warn(
          `Attempted to navigate to step with ID '${stepId}'`
          + ', but this step does not exist.',
        );
        return state;
      }
      return {
        ...state,
        navId: stepId,
      };
    }
    case QUANTISED_SCROLL_ACTION_TYPES.SCROLL_TO: {
      const { position } = action.payload;
      return {
        ...state,
        scrollPosition: position,
      };
    }
    default:
      return state;
  }
};

export default QuantisedScroller;
