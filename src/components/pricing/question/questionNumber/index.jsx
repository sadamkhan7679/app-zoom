import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import classConcat from '../../../../util/ClassConcat'
import FadeTransition, { FADE_DIRECTION } from '../../../common/FadeTransition/FadeTransition'

const QuestionNumber = ({ index, count }) => (
  <FadeTransition
    tag="div"
    className={classConcat(
      'container',
      styles.container,
    )}
    direction={FADE_DIRECTION.NONE}
    delay="0.1s"
    show
  >
    <span className={styles.number}>
      {
        (() => {
          const dots = []
          for (let i = 0; i < count; i += 1) {
            const complete = (i < index - 1)
            const active = (i === index - 1)
            const className = classConcat(
              styles.dot,
              complete ? styles.complete : null,
              active ? styles.active : null,
            )
            dots.push(
              <span key={Math.random() * 100 + 'dots'} className={className}>•</span>,
            )
          }
          return dots
        })()
      }
    </span>
  </FadeTransition>
)

QuestionNumber.propTypes = {
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
}

export default QuestionNumber
