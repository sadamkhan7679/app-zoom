import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

export const BREAKPOINT = {
  XS: 0,
  SM: 1,
  MD: 2,
  LG: 3,
  XL: 4,
};

const BREAKPOINT_WIDTH = {
  SM: 576,
  MD: 767,
  LG: 992,
  XL: 1200,
};

const useBreakpoint = () => {
  if (typeof window === 'undefined') return BREAKPOINT.XS;
  const [brkPnt, setBrkPnt] = useState(BREAKPOINT.XS);
  //
  useEffect(() => {
    if (typeof window === 'undefined') return null;
    //
    const getBreakpoint = (width) => {
      if (width >= 0 && width < BREAKPOINT_WIDTH.SM) {
        return BREAKPOINT.XS;
      } if (width >= BREAKPOINT_WIDTH.SM && width < BREAKPOINT_WIDTH.MD) {
        return BREAKPOINT.SM;
      } if (width >= BREAKPOINT_WIDTH.MD && width < BREAKPOINT_WIDTH.LG) {
        return BREAKPOINT.MD;
      } if (width >= BREAKPOINT_WIDTH.LG && width < BREAKPOINT_WIDTH.XL) {
        return BREAKPOINT.LG;
      } if (width >= BREAKPOINT_WIDTH.XL) {
        return BREAKPOINT.XL;
      }
      const msg = `Could not determine breakpoint. [width=${width}]`;
      throw new Error(msg);
    };
    //
    const calcInnerWidth = throttle(() => {
      setBrkPnt(
        getBreakpoint(window.innerWidth),
      );
    }, 200);
    setBrkPnt(getBreakpoint(window.innerWidth));
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);
  //
  return brkPnt;
};

export default useBreakpoint;
