import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../../util/ClassConcat'
import styles from './StepText.module.css'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'

const StepText = ({ heading, children, show }) => (
  <div className={styles.stepText}>
    <FadeTransition
      tag="h3"
      direction={FADE_DIRECTION.RIGHT}
      delay="0.1s"
      show={show}
      className={classConcat('section__h3', styles.heading)}
    >
      {heading}
    </FadeTransition>
    <FadeTransition
      direction={FADE_DIRECTION.RIGHT}
      delay="0.133s"
      show={show}
      className={classConcat('section__p', styles.paragraph)}
    >
      {children}
    </FadeTransition>
  </div>
)

StepText.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
}

export default StepText
