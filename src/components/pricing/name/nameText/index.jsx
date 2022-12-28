import React from 'react'
import PropTypes from 'prop-types'
import classConcat from '../../../../util/ClassConcat'
import styles from './styles.module.css'
import EstimateBar from '../../estimate/estimateBar'
import QuestionNumber from '../../question/questionNumber'
import QUESTIONS from '../../../../constants/pricing/questions'


const NameText = ({ children, para }) => (
  <div
    className={classConcat(
      'container',
      styles.container,
    )}
  >
    {
      para !== true &&
      <>
        <EstimateBar />
        <QuestionNumber
          index={2}
          count={QUESTIONS.length}
        />
      </>
    }
    <div className={styles.body}>
      {children}
    </div>
  </div>
)

NameText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NameText
