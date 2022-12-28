import React from 'react'
import QuestionOptionGroup from '../../../../components/pricing/question/questionOptionGroup'
import QuestionText from '../../../../components/pricing/question/questionText'
import classConcat from '../../../../util/ClassConcat'
import QUESTIONS from '../../../../constants/pricing/questions'
import styles from './styles.module.css'
//
import iphoneSvg from '../../../../assets/pricing/iphone.svg'
import androidSvg from '../../../../assets/pricing/android.svg'
import iphoneAndroidSvg from '../../../../assets/pricing/iphone-android.svg'


import PRICING_ACTIONS from '../../../../redux/actions/Pricing'
import findFirstNullQuestion from '../../../../functions/pricing/findFirstNullQuestion'
import { useSelector, useDispatch } from 'react-redux'
import PlatformOptions from './PlatformOptions';

const PlatformsQuestion = () => {
  // Hooks
  const dispatch = useDispatch()
  const Pricing = useSelector((state) => state.Pricing);
  const { answers } = Pricing;
  const platforms = typeof answers.get('platforms') === 'object' ? answers.get('platforms') : {};

  const questionIndex = 0
  const question = QUESTIONS[questionIndex]

  const answersComp = {
    // [question.answerIds.WEB]: false,
    // [question.answerIds.IOS]: false,
    // [question.answerIds.ANDROID]: false,
    web: false,
    ios: false,
    android: false,
    ...platforms
  };
  // Events
  const handleChange = (data) => {
    const setAnswer = PRICING_ACTIONS.setAnswer(question.id, data)
    dispatch(setAnswer)

  }
  return (
    <>
      <div
        className={classConcat(
          'container',
          styles.container,
        )}
      >
        <h4 className="section__h1">What does it cost to develop an app?</h4>
        <p className="section__p">
          Apps can cost as little as
          {' '}
          <b>$1,000</b>{' '}for the simplest app or as much as{' '}<b>$100,000 for detailed apps.</b>
          <br />
          <br />
          To get a breakdown of the cost of making an app, please
          {' '}
          answer
          {' '}
          <b>a few</b>
          {' '}
          questions below.
        </p>
      </div>
      <QuestionText
        index={questionIndex + 1}
        heading="Where will the app be published?"
      >
        <p className="section__p">
          Please pick at least one platform to proceed.
        </p>
      </QuestionText>

      <PlatformOptions answers={answersComp} setAnswers={handleChange} platforms={[
        {
          text: 'iOS on Apple App Store',
          questionId: question.id,
          answerId: question.answerIds.IOS,
        },
        {
          text: 'Android on Google Play Store',
          questionId: question.id,
          answerId: question.answerIds.ANDROID,
        },
        {
          text: 'Web App or PWA',
          questionId: question.id,
          answerId: question.answerIds.WEB,
        },
      ]} />
    </>
  )
}
export default PlatformsQuestion
