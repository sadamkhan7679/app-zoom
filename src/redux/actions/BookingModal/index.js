const { default: BOOKING_MODAL_ACTION_TYPES } = require('../../actionTypes/BookingModal');

const openBookingModal = () => ({
  type: BOOKING_MODAL_ACTION_TYPES.OPEN_BOOKING_MODAL,
  payload: {},
});

const closeBookingModal = () => ({
  type: BOOKING_MODAL_ACTION_TYPES.CLOSE_BOOKING_MODAL,
  payload: {},
});

const BOOKING_MODAL_ACTIONS = {
  openBookingModal,
  closeBookingModal,
};

export default BOOKING_MODAL_ACTIONS;
