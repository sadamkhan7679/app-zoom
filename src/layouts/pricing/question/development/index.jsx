import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import classConcat from "../../../../util/ClassConcat";
import QUESTIONS from "../../../../constants/pricing/questions";
import EstimateBar from "../../../../components/pricing/estimate/estimateBar";
import QuestionNumber from "../../../../components/pricing/question/questionNumber";
import QuestionText from "../../../../components/pricing/question/questionText";
import QuestionOptionGroup from "../../../../components/pricing/question/questionOptionGroup";
import GoBack from "../../../../components/pricing/goBack";

import { useDispatch, useSelector } from "react-redux";
import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";

const DevelopmentQuestion = ({ index, question, prevQuestion, location }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;

  React.useEffect(() => {
    console.log(window.location);
  }, []);

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Process Information</h4>
        <p className="section__p">
          Over the years, OpZoom has fine tuned a process to develop apps. You
          can expect various documents in each of these steps.
        </p>
        <p className="section__p">
          We can send you a short explaination of the app development process
          along with sample of documents used such as the:
          <ul>
            <li>Planning document</li>
            <li>Design files</li>
          </ul>
        </p>
      </div>
      <QuestionText
        index={index + 1}
        heading="Do you want these process documents?"
      >
        <p className="section__p">Select an option.</p>
      </QuestionText>
      <QuestionOptionGroup
        nextQuestion={"level-of-detail"}
        // nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge, verifyCount) : 'level-of-detail'}
        question={question}
        options={[
          {
            // imgSrc: questionSvg,
            text: "YES",
            info: <>Sample documents needed, and the lifecycle of an app.</>,
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.YES,
          },
          {
            // imgSrc: textSvg,
            text: "NO",
            info: <>Sample documents needed, and the lifecycle of an app.</>,
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.NO,
          },
        ]}
      />
      <GoBack prevQuestionId="funding" />
    </>
  );
};

DevelopmentQuestion.propTypes = {
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
};

DevelopmentQuestion.defaultProps = {
  prevQuestion: null,
};

export default DevelopmentQuestion;
