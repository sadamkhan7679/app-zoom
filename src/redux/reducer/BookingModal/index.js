import BOOKING_MODAL_ACTION_TYPES from '../../actionTypes/BookingModal';

export const initialBookingModalState = {
  open: false,
};

const BookingModal = (state = initialBookingModalState, action) => {
  switch (action.type) {
    case BOOKING_MODAL_ACTION_TYPES.OPEN_BOOKING_MODAL:
      return { ...state, open: true };
    case BOOKING_MODAL_ACTION_TYPES.CLOSE_BOOKING_MODAL:
      return { ...state, open: false };
    default: return state;
  }
};

export default BookingModal;
