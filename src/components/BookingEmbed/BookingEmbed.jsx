import React from 'react'
import PropTypes from 'prop-types'
import styles from './BookingEmbed.module.css'
import classConcat from '../../util/ClassConcat'

const BookingEmbed = ({ expand }) => (
  <div
    className={classConcat(
      styles.container,
      expand ? styles.expand : null,
    )}
  >
    <iframe
      // style={{scrollbarWidth:0}}
      title="schedule-appointment"
      src="https://app.acuityscheduling.com/schedule.php?owner=13723659&appointmentType=16940979"
      width="100%"
      height={expand ? '1660' : '800'}
      frameBorder="0"
    />
  </div>
)

BookingEmbed.propTypes = {
  expand: PropTypes.bool,
}

BookingEmbed.defaultProps = {
  expand: false,
}

export default BookingEmbed
