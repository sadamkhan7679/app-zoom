import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../../util/ClassConcat'
import styles from './styles.module.css'
import EstimateBar from '../../estimate/estimateBar'
import QuestionNumber from '../../question/questionNumber'
import QUESTIONS from '../../../../constants/pricing/questions'


const SignUpText = ({ children }) => (
  <div
    className={classConcat(
      'container',
      styles.container,
    )}
  >
    <EstimateBar />
    <QuestionNumber
      index={11}
      count={QUESTIONS.length}
    />
    <div className={styles.body}>
      {children}
    </div>
  </div>
)

SignUpText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SignUpText
