import { initialQuantisedScrollerState } from '../../reducer/QuantisedScroller';
import deserialisePricing from './Pricing';

const deserialise = (serialisedState) => ({
  ...serialisedState,
  Pricing: deserialisePricing(serialisedState.Pricing),
  QuantisedScroller: initialQuantisedScrollerState,
});

export default deserialise;
