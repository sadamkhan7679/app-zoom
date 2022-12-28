import React from 'react'
import PropTypes from 'prop-types'
import styles from './PhasePoint.module.css'

const PhasePoint = ({ src, heading, children }) => (
  <div className={styles.container}>
    <img
      src={src}
      alt=""
      className={styles.img}
    />
    <div className={styles.heading}>
      <strong>{heading}</strong>
    </div>
    <p>
      {children}
    </p>
  </div>
)

PhasePoint.propTypes = {
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PhasePoint
