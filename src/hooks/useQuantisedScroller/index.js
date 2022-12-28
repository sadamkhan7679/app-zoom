import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QUANTISED_SCROLLER_ACTIONS from '../../redux/actions/QuantisedScroller';
import { endLoop, startLoop } from '../../util/animationLoop';
import getElementPosition from '../../util/ElementPosition';

const useQuantisedScroller = (hash, stepsGroup, stepIds, elementRef) => {
  // Redux
  const {
    // pageId,
    stepIndices,
    navId,
    scrollPosition,
  } = useSelector((state) => state.QuantisedScroller);
  const dispatch = useDispatch();
  // Effects
  //  - Inform quantised scroller of step indices.
  React.useEffect(() => {
    stepIds.forEach((stepId, index) => {
      if (stepIndices.has(stepId)) return;
      const setStepIndex = QUANTISED_SCROLLER_ACTIONS.setStepIndex(
        stepId, stepsGroup, index,
      );
      dispatch(setStepIndex);
    });
  });
  // - Scroll to position if navigated.
  React.useEffect(() => {
    // If not in browser context, do nothing.
    if (typeof window === 'undefined') return () => {};
    //
    const attemptNav = () => {
      // If no ref has been registered, do nothing
      if (!elementRef.current) return;
      // If stepId exists in group, scroll to it.
      stepIds.forEach((stepId) => {
        if (navId === stepId) {
          const sectionPosition = getElementPosition(elementRef.current);
          if (Math.abs(scrollPosition - sectionPosition) > 0.5) {
            const scrollTo = QUANTISED_SCROLLER_ACTIONS.scrollTo(sectionPosition);
            dispatch(scrollTo);
          }
        }
      });
    };
    //
    attemptNav();
    //
    const onLoop = () => attemptNav();
    startLoop(onLoop, elementRef, 12);
    return () => endLoop(onLoop, elementRef);
  });
};

export default useQuantisedScroller;
