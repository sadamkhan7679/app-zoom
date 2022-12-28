
const serialisePricing = (Pricing) => ({
  ...Pricing,
  answers: [...Pricing.answers.entries()],
  optionalInfo: [...Pricing.optionalInfo.entries()],
});

export default serialisePricing;
