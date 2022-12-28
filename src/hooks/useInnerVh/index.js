import { useEffect } from 'react';
import throttle from 'lodash/throttle';

/**
 * Sets and updates CSS variable '--ivh' that is similar to vh, but
 * represents the viewport's inner-height.
 * This is needed because 100vh does not work as expected in iOS.
 */
const useInnerVh = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return null;
    const updateInnerVh = () => {
      const ivh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(
        '--ivh', `${ivh}px`,
      );
    };
    const throttledUpdate = throttle(() => updateInnerVh(), 200);
    updateInnerVh();
    window.addEventListener('resize', throttledUpdate);
    return () => window.removeEventListener('resize', throttledUpdate);
  }, []);
};

export default useInnerVh;
