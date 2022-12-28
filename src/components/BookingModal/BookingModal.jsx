import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useBreakpoint, { BREAKPOINT } from '../../hooks/useBreakpoint'
import BOOKING_MODAL_ACTIONS from '../../redux/actions/BookingModal'
import classConcat from '../../util/ClassConcat'
import BookingEmbed from '../BookingEmbed/BookingEmbed'
import styles from './BookingModal.module.css'

const BookingModal = () => {
  // Redux
  const { open } = useSelector((state) => state.BookingModal)
  const dispatch = useDispatch()
  // Hooks
  const breakpoint = useBreakpoint()
  // Computations
  const isSmall = breakpoint < BREAKPOINT.MD
  // Procedures
  const closeModal = () => {
    const closeModalAction = BOOKING_MODAL_ACTIONS.closeBookingModal()
    dispatch(closeModalAction)
  }
  // Effects
  // - Close if viewport is too small.
  React.useEffect(() => {
    if (isSmall && open) closeModal()
  }, [isSmall])
  // - Close if 'Esc' key is pressed
  React.useEffect(() => {
    if (typeof window === 'undefined') return null
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  // Events
  // - Backdrop Click
  const handleBackdropClick = () => closeModal()
  // Render
  return (
    <>
      <div
        className={classConcat(
          styles.modal,
          open ?
            styles.modalShow
            : null,
        )}
      >
        {/* <div style={{ padding: 10, backgroundColor: 'red' }}> */}
          <BookingEmbed />
        {/* </div> */}
      </div>
      <button
        type="button"
        className={classConcat(
          styles.backdrop,
          open ? styles.backdropShow : null,
        )}
        onClick={handleBackdropClick}
      >
        [x] Close Modal
      </button>
    </>
  )
}

export default BookingModal
