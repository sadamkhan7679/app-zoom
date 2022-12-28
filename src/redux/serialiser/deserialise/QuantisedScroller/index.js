import { Map } from 'immutable';

const deserialiseQuantisedScroller = (serialisedQuantisedScroller) => ({
  ...serialisedQuantisedScroller,
  stepIndices: Map(serialisedQuantisedScroller.stepIndices),
});

export default deserialiseQuantisedScroller;
