import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../../util/ClassConcat'
import styles from './styles.module.css'
import FadeTransition from '../../../common/FadeTransition/FadeTransition'

const EstimateText = ({ heading, children }) => (
  <div
    className={classConcat(
      'container',
      styles.container,
    )}
  >
    <FadeTransition
      tag="h1"
      delay="0.15s"
      className={styles.heading}
      show
    >
      {heading}
    </FadeTransition>
    {children
      ? (
        <p className={styles.paragraph}>
          {children}
        </p>
      ) : null}
  </div>
)

EstimateText.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
}

EstimateText.defaultProps = {
  children: null,
}

export default EstimateText
