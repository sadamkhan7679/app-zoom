import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../../../util/ClassConcat'
import styles from './styles.module.css'
import EstimateBar from '../../../../../components/pricing/estimate/estimateBar'

const MoreText = ({ children }) => (
  <div
    className={classConcat(
      'container',
      styles.container,
    )}
  >
    {/* <EstimateBar /> */}
    <div className={styles.body}>
      {children}
    </div>
  </div>
)

MoreText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MoreText
