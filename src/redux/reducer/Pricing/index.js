import { Map } from 'immutable';
import OPTIONAL_INFO from '../../../constants/pricing/optionalInfo';
import QUESTIONS from '../../../constants/pricing/questions';
import unpackPricingObject from '../../../functions/pricing/unpackPricingObject';
import PRICING_ACTION_TYPES from '../../actionTypes/Pricing';

export const initialPricingState = {
  answers: Map(QUESTIONS.map(({ id }) => {
    if (id === 'referral' || id === 'patent') {
      return [id, 'yes'];
    }
    return [id, null];
  })),
  name: null,
  estimate: null,
  email: null,
  charge: null,
  patch: null,
  emails: [],
  phone: null,
  message: [],
  hasSignedUp: false,
  optionalInfo: Map(
    Object.values(OPTIONAL_INFO).map((optionalInfoId) => [
      optionalInfoId,
      false,
    ]),
  ),
  clid: null,
  linkCount: 0,
  id: null,
  verifyCount: 0,
  tsUnsubscribe: 0,
  monthlyFee: 0,
  amount: 0,
  inDev: false,
  tempEmail: null,
};

const Pricing = (state = initialPricingState, action) => {
  switch (action.type) {
    case PRICING_ACTION_TYPES.SET_ANSWER: {
      const { questionId, answerId } = action.payload;
      const answers = state.answers.set(questionId, answerId);
      return { ...state, answers };
    }
    case PRICING_ACTION_TYPES.SET_TEMP_EMAIL: {
      const { email } = action.payload;
      return email
        ? { ...state, tempEmail: email }
        : { ...state, tempEmail: state.email };
    }

    case PRICING_ACTION_TYPES.SET_FUNDING: {
      const { answerId } = action.payload;
      const answers = state.answers.set('fundingType', answerId);
      return { ...state, answers };
    }
    case PRICING_ACTION_TYPES.SET_NAME: {
      const { name } = action.payload;
      return { ...state, name };
    }

    case PRICING_ACTION_TYPES.SET_CHARGE: {
      const { charge } = action.payload;
      return { ...state, charge };
    }

    case PRICING_ACTION_TYPES.SET_ESTIMATE: {
      const { estimate } = action.payload;
      return { ...state, estimate };
    }
    case PRICING_ACTION_TYPES.SET_EMAIL: {
      const { email } = action.payload;
      return { ...state, email };
    }
    case PRICING_ACTION_TYPES.SET_PHONE: {
      const { phone } = action.payload;
      return { ...state, phone };
    }
    case PRICING_ACTION_TYPES.SET_MESSAGE: {
      const { message } = action.payload;
      return { ...state, message };
    }
    case PRICING_ACTION_TYPES.SET_PATCH: {
      const { patch } = action.payload;
      return { ...state, patch };
    }
    case PRICING_ACTION_TYPES.SIGN_UP: {
      return { ...state, hasSignedUp: true };
    }
    case PRICING_ACTION_TYPES.SET_OPTIONAL_INFO: {
      const { optionId, selected } = action.payload;
      const optionalInfo = state.optionalInfo.set(optionId, selected);
      return { ...state, optionalInfo };
    }
    case PRICING_ACTION_TYPES.SET_CLID: {
      const { clid } = action.payload;
      return state.clid === null ? { ...state, clid } : { ...state };
    }
    case PRICING_ACTION_TYPES.INCR_LINK_COUNT: {
      return { ...state, linkCount: state.linkCount + 1 };
    }
    case PRICING_ACTION_TYPES.RECEIVE_OBJECT: {
      const { pricingObject } = action.payload;
      const updatedState = unpackPricingObject(pricingObject);
      return { ...state, ...updatedState };
    }
    case PRICING_ACTION_TYPES.SET_ID: {
      const { id } = action.payload;
      return { ...state, id };
    }
    case PRICING_ACTION_TYPES.SET_TSUNSUBSCRIBE: {
      const { tsUnsubscribe } = action.payload;
      return { ...state, tsUnsubscribe };
    }
    case PRICING_ACTION_TYPES.SET_MONTHLYFEE: {
      const { monthlyFee } = action.payload;
      return { ...state, monthlyFee };
    }
    case PRICING_ACTION_TYPES.SET_AMOUNT: {
      const { amount } = action.payload;
      return { ...state, amount };
    }
    case PRICING_ACTION_TYPES.SET_VERIFYCOUNT: {
      const { verifyCount } = action.payload;
      return { ...state, verifyCount };
    }
    case PRICING_ACTION_TYPES.IN_DEV: {
      return { ...state, inDev: true };
    }
    default:
      return state;
  }
};

export default Pricing;
