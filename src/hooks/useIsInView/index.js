import React from 'react';
import { endLoop, startLoop } from '../../util/animationLoop';

const useIsInView = (ref, offset = { x: 0, y: 0 }) => {
  if (typeof window === 'undefined') return true;
  // State
  const [isInView, setInView] = React.useState(false);
  // Effects
  // - Check if current ref is in view.
  React.useEffect(() => {
    if (typeof window === 'undefined') return null;
    const onLoop = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const currentlyInView = (
        rect.left < window.innerWidth + offset.x
                && rect.right > 0 + offset.x
                && rect.top < window.innerHeight + offset.y
                && rect.bottom > 0 + offset.y
      );
      if (currentlyInView !== isInView) {
        setInView(currentlyInView);
      }
    };
    startLoop(onLoop, onLoop, 12);
    return () => endLoop(onLoop, onLoop);
  });
  // Return
  return isInView;
};

export default useIsInView;
