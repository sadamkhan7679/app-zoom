import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import classConcat from '../../../../util/ClassConcat'
import QUESTIONS from '../../../../constants/pricing/questions'
import EstimateBar from '../../../../components/pricing/estimate/estimateBar'
import QuestionNumber from '../../../../components/pricing/question/questionNumber'
import QuestionText from '../../../../components/pricing/question/questionText'
import QuestionOptionGroup from '../../../../components/pricing/question/questionOptionGroup'
import GoBack from '../../../../components/pricing/goBack'


import findFirstNullQuestion from '../../../../functions/pricing/findFirstNullQuestion';
import calcFirstlandingPage from '../../../../functions/pricing/calcFirstlandingPage';

import { useDispatch, useSelector } from "react-redux";


const PatentQuestion = ({ index, question, prevQuestion }) => {


  const Pricing = useSelector((state) => state.Pricing);
  const { answers,verifyCount,charge } = Pricing;
  const [myPrevQuestion, setMyPrevQuestion] = useState(null)

  useEffect(() => {
      // 9,10,11 -- has , link, referral
      if(answers.get('context') !== 'personal'){
          setMyPrevQuestion(QUESTIONS[11])
      } else if(answers.get('hasWebsite') === 'yes'){
          setMyPrevQuestion(QUESTIONS[10])
      } else if(answers.get('hasWebsite') === 'no'){
          setMyPrevQuestion(QUESTIONS[9])
      }

  }, [])
  return (
    <>
      <EstimateBar />
      <QuestionNumber
        index={index + 1}
        count={QUESTIONS.length}
      />
        <div className={classConcat('container',styles.container)} >
        <h4 className="section__h1">Patent</h4>
         <p className="section__p">
            Companies create patents for reasons ranging from:
           <ul>
             <li>having an asset that investors value similar to real estate</li>
             <li>being able to exclude other companies from a valuable market</li>
             <li>as a source of revenue from royalties</li>
           </ul>
          </p>
          <p className="section__p">
            Companies with patents are sometimes valuable simply because an existing company with revenue wants to buy it.
          </p>
          <p className="section__p">
            OpZoom can assist in researching and filing patents.
          </p>
          <p className="section__p">
            Optionally, OpZoom can also refer you to lawyers to get discounts on their services.
          </p>
        </div>
      <QuestionText
        index={index + 1}
        heading="What kind of patent do you need?"
      >
      <p className="section__p">
            Please pick at least one option to proceed.
      </p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={'technology'}
        nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge,verifyCount) : 'technology'}
        question={question}
        options={[
          {
            imgSrc: null,
            text: 'None',
            info: (
              <>
                You don't need our help getting a patent.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: 'no',
          },
          {
            imgSrc: null,
            text: 'Provisional Patent',
            info: (
              <>
                We will help you get a Provisional Patent.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: 'provisional',
          },
          {
            imgSrc: null,
            text: "Non-Provisional Patent",
            info: (
              <>
                 We will help you get a Non-Provisional Patent.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: 'non-provisional',
          },
          {
            imgSrc: null,
            text: 'I don’t know what type of patent I need ',
            info: (
              <>
                We will help you choose and understand between types of patents.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: 'dont-know',
          },
        ]}
      />
        {
            myPrevQuestion ?
                <GoBack prevQuestionId={myPrevQuestion.id} />
            : ''
        }
    </>
  )
}

PatentQuestion.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
  prevQuestion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    answerIds: PropTypes.object.isRequired,
  }),
}

PatentQuestion.defaultProps = {
  prevQuestion: null,
}

export default PatentQuestion
