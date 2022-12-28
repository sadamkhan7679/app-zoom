import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

export const ORIENTATION = {
  LANDSCAPE: 'LANDSCAPE',
  PORTRAIT: 'PORTRAIT',
};

const useOrientation = () => {
  if (typeof window === 'undefined') return ORIENTATION.PORTRAIT;
  const [orientation, setOrientation] = useState(ORIENTATION.PORTRAIT);
  //
  useEffect(() => {
    if (typeof window === 'undefined') return null;
    //
    const getOrientation = (width, height) => (
      width > height ? ORIENTATION.LANDSCAPE : ORIENTATION.PORTRAIT
    );
    //
    const calcOrientation = throttle(() => {
      setOrientation(
        getOrientation(window.innerWidth, window.innerHeight),
      );
    }, 200);
    setOrientation(
      getOrientation(window.innerWidth, window.innerHeight),
    );
    window.addEventListener('resize', calcOrientation);
    return () => window.removeEventListener('resize', calcOrientation);
  }, []);
  //
  return orientation;
};

export default useOrientation;
