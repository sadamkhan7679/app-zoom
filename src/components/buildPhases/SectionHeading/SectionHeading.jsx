import React from 'react'
import PropTypes from 'prop-types'
import styles from './SectionHeading.module.css'

const SectionHeading = ({ children }) => (
  <h2 className={styles.h2}>
    {children}
  </h2>
)

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionHeading
