const { default: PRICING_ACTION_TYPES } = require('../../actionTypes/Pricing');

const start = () => ({
  type: PRICING_ACTION_TYPES.START,
  payload: {},
});

const setAnswer = (questionId, answerId) => ({
  type: PRICING_ACTION_TYPES.SET_ANSWER,
  payload: { questionId, answerId },
});

const setFunding = (answerId) => ({
  type: PRICING_ACTION_TYPES.SET_FUNDING,
  payload: { answerId },
});

const setName = (name) => ({
  type: PRICING_ACTION_TYPES.SET_NAME,
  payload: { name },
});

const setCharge = (charge) => ({
  type: PRICING_ACTION_TYPES.SET_CHARGE,
  payload: { charge },
});

const setEstimate = (estimate) => ({
  type: PRICING_ACTION_TYPES.SET_ESTIMATE,
  payload: { estimate },
});

const setEmail = (email) => ({
  type: PRICING_ACTION_TYPES.SET_EMAIL,
  payload: { email },
});

const setPhone = (phone, phoneFormatted) => ({
  type: PRICING_ACTION_TYPES.SET_PHONE,
  payload: { phone, phoneFormatted },
});

const setMessage = (message) => ({
  type: PRICING_ACTION_TYPES.SET_MESSAGE,
  payload: { message },
});

const setPatch = (patch) => ({
  type: PRICING_ACTION_TYPES.patch,
  payload: { patch },
});

const signUp = () => ({
  type: PRICING_ACTION_TYPES.SIGN_UP,
  payload: {},
});

const setOptionalInfo = (optionId, selected) => ({
  type: PRICING_ACTION_TYPES.SET_OPTIONAL_INFO,
  payload: { optionId, selected },
});

const setClid = (clid) => ({
  type: PRICING_ACTION_TYPES.SET_CLID,
  payload: { clid },
});

const incrLinkCount = () => ({
  type: PRICING_ACTION_TYPES.INCR_LINK_COUNT,
  payload: {},
});

const receiveObject = (pricingObject) => ({
  type: PRICING_ACTION_TYPES.RECEIVE_OBJECT,
  payload: { pricingObject },
});

const setId = (id) => ({
  type: PRICING_ACTION_TYPES.SET_ID,
  payload: { id },
});

const setVerifyCount = (verifyCount) => ({
  type: PRICING_ACTION_TYPES.SET_VERIFYCOUNT,
  payload: { verifyCount },
});

const setTsUnsubscribe = (tsUnsubscribe) => ({
  type: PRICING_ACTION_TYPES.SET_TSUNSUBSCRIBE,
  payload: { tsUnsubscribe },
});

const setMonthlyFee = (monthlyFee) => ({
  type: PRICING_ACTION_TYPES.SET_MONTHLYFEE,
  payload: { monthlyFee },
});

const setAmount = (amount) => ({
  type: PRICING_ACTION_TYPES.SET_AMOUNT,
  payload: { amount },
});

const inDev = () => ({
  type: PRICING_ACTION_TYPES.IN_DEV,
  payload: {},
});

const setTempEmail = (email) => ({
  type: PRICING_ACTION_TYPES.SET_TEMP_EMAIL,
  payload: { email },
});

const PRICING_ACTIONS = {
  start,
  setName,
  setCharge,
  setEstimate,
  setEmail,
  setPhone,
  setMessage,
  setPatch,
  signUp,
  setAnswer,
  setOptionalInfo,
  setClid,
  incrLinkCount,
  receiveObject,
  setId,
  setTsUnsubscribe,
  setMonthlyFee,
  setAmount,
  setVerifyCount,
  setFunding,
  inDev,
  setTempEmail,
};

export default PRICING_ACTIONS;
