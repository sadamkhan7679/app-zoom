import React from 'react'
import MoreFormRow, { INPUT_TYPE } from './moreFormRow'
import styles from './styles.module.css'
import VALIDATORS from '../../../../../util/validators'
import PRICING_ACTIONS from '../../../../../redux/actions/Pricing'
import MoreButton from './moreButton'
import PropTypes from "prop-types";

const NameForm = ({ question, answers, setAnswers }) => (

  <div className="container">
    <div className={styles.container}>
      <MoreFormRow
        name={" Equity"}
        answer={answers.equity}
        setAnswers={setAnswers}
        type={'equity'}
        answers={answers}
      />
      <MoreFormRow
        name={" Revenue Share Partnership"}
        answer={answers.rsp}
        setAnswers={setAnswers}
        type={'rsp'}
        answers={answers}
      />

      <MoreFormRow
        name={" Debt"}
        answer={answers.debt}
        setAnswers={setAnswers}
        type={'debt'}
        answers={answers}
      />
      <MoreFormRow
        name={" Others"}
        inputType="text"
        disabled={true}
        answer={answers.others}
        setAnswers={setAnswers}
        type={'others'}
        answers={answers}
      />

      <MoreButton question={question} answers={answers} />

    </div>
  </div>
)



NameForm.propTypes = {
  name: PropTypes.string,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
}
NameForm.defaultProps = {
  name: null,
  question: null,
}

export default NameForm
