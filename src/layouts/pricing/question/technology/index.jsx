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
// import checkLinkCount from '../../../../functions/pricing/checkLinkCount'
// import appSvg from '../../../../assets/pricing/app.svg'
// import figmaSvg from '../../../../assets/pricing/figma.svg'
// import pencilSvg from '../../../../assets/pricing/pencil.svg'
// import questionSvg from '../../../../assets/pricing/question.svg'
// import textSvg from '../../../../assets/pricing/text.svg'

import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";
import { useSelector, useDispatch } from "react-redux";

const TechnologyQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Sample Apps</h4>
        <p className="section__p">
          We have a list of sample apps that are very popular on the app store
          and use our technology. This list includes apps that have at least{" "}
          <b>1,000,000</b> or so downloads.
        </p>
        <p className="section__p">
          This is a small sample of the capabilities of our technology.
        </p>
      </div>
      <QuestionText
        index={index + 1}
        heading="Do you want to see sample apps that use our technology?"
      >
        <p className="section__p">Please select one option.</p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={'marketing'}
        // nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge,verifyCount) : 'marketing'}
        nextQuestion={"marketing"}
        question={question}
        options={[
          {
            // imgSrc: questionSvg,
            text: "YES",
            info: <>YES</>,
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.YES,
          },
          {
            // imgSrc: textSvg,
            text: "NO",
            info: <>NO</>,
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.NO,
          },
        ]}
      />
      <GoBack prevQuestionId={prevQuestion.id} />
    </>
  );
};

TechnologyQuestion.propTypes = {
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

TechnologyQuestion.defaultProps = {
  prevQuestion: null,
};

export default TechnologyQuestion;
