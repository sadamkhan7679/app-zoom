import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../../util/ClassConcat'
import styles from './Arrow.module.css'

const Arrow = ({ hover }) => (
  <div
    className={classConcat(
      styles.container,
      hover ? styles.hover : null,
    )}
  >
    <svg
      viewBox="0 0 16 16"
      className={classConcat(
        'bi',
        'bi-chevron-double-up',
        styles.arrow,
      )}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  </div>
)

Arrow.propTypes = {
  hover: PropTypes.bool.isRequired,
}

export default Arrow
