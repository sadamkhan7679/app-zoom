import { Map } from 'immutable';

const deserialisePricing = (serialisedPricing) => ({
  ...serialisedPricing,
  answers: Map(serialisedPricing.answers),
  optionalInfo: Map(serialisedPricing.optionalInfo),
});

export default deserialisePricing;
