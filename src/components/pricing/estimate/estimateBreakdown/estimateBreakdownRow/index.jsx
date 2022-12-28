import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'gatsby'
import styles from './styles.module.css'
import classConcat from '../../../../../util/ClassConcat'

const EstimateBreakdownRow = ({ questionId, questionText, answerGetter }) => {
  // Hooks
  const answerId = useSelector((state) => state.Pricing.answers.get(questionId))
  // Computations
  const { img: answerImg, text: answerText } = answerGetter(answerId)
  // Render
  return (
    <div
      className={classConcat(
        'row',
        'px-md-2',
        'py-2',
        'my-3',
        'my-md-4',
        'align-items-center',
        styles.row,
      )}
    >
      {
        answerImg &&
        <div className="col-3 col-md-2">
          <img
            src={answerImg}
            alt=""
            className={styles.icon}
          />
        </div>
      }
      <div className={ answerImg ? "col-9 col-md-10" : "col-12 col-md-12"}>
        <p className={styles.question}>
          {questionText}
        </p>
        <div>
          <span className={styles.answer}>
            {answerText}
          </span>
          <span className={styles.change}>
            <Link
              className={styles.changeButton}
              to={`/cost-to-make-an-app/${questionId}`}
            >
              Change
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

EstimateBreakdownRow.propTypes = {
  questionId: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  answerGetter: PropTypes.func.isRequired,
}

export default EstimateBreakdownRow
