import React from 'react'
import MoreFormRow, { INPUT_TYPE } from '../fundingType/moreForm/moreFormRow'
import MoreButton from './moreButton'
import styles from '../fundingType/moreForm/styles.module.css'
import PropTypes from "prop-types";

const NameForm = ({ platforms, answers, setAnswers }) => (

  <div className="container">
    <div className={styles.container}>
      {platforms.map(({text, answerId}, index) => (
          <MoreFormRow
            key={index}
            name={text}
            title={text}
            answer={answers && answers[answerId]}
            setAnswers={setAnswers}
            type={answerId}
            answers={answers}
          /> 
        ))
      }
      
      <MoreButton question={platforms} answers={answers} />

    </div>
  </div>
)



NameForm.propTypes = {
  name: PropTypes.string,
  // question: PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   answerIds: PropTypes.object.isRequired,
  // }).isRequired,
}
NameForm.defaultProps = {
  name: null
}

export default NameForm
