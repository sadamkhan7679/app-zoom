
const serialiseQuantisedScroller = (QuantisedScroller) => ({
  ...QuantisedScroller,
  stepIndices: [...QuantisedScroller.stepIndices.entries()],
});

export default serialiseQuantisedScroller;
