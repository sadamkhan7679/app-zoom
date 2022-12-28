import serialisePricing from './Pricing';

const serialise = (state) => ({
  ...state,
  Pricing: serialisePricing(state.Pricing),
  QuantisedScroller: null,
});

export default serialise;
