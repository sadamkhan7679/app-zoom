import { combineReducers } from 'redux';
import QuantisedScroller, { initialQuantisedScrollerState } from './QuantisedScroller';
import BookingModal, { initialBookingModalState } from './BookingModal';
import Pricing, { initialPricingState } from './Pricing';

export const initialState = {
  QuantisedScroller: { ...initialQuantisedScrollerState },
  BookingModal: { ...initialBookingModalState },
  Pricing: { ...initialPricingState },
};

const compositeReducer = combineReducers({
  QuantisedScroller,
  BookingModal,
  Pricing,
});

export default compositeReducer;
