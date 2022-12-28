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

import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import { useDispatch, useSelector } from "react-redux";

// import checkLinkCount from '../../../../functions/pricing/checkLinkCount'
// import appSvg from '../../../../assets/pricing/app.svg'
// import figmaSvg from '../../../../assets/pricing/figma.svg'
// import pencilSvg from '../../../../assets/pricing/pencil.svg'
// import questionSvg from '../../../../assets/pricing/question.svg'
// import textSvg from '../../../../assets/pricing/text.svg'

const FundingQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers } = Pricing;

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Funding</h4>
        <p className="section__p">
          OpZoom has helped raise up to $6 million for app companies.
          <br />
          To speed up progress, OpZoom invests upto $100,000 in startups that
          qualify.
          <br />
          Funding helps companies get resources, credibility and trust.
          <br />
        </p>
        <p className="section__p">
          Companies love funding because they feel that they have a trustable
          partner with a common long term goal of building value through the
          company.
        </p>
      </div>
      <QuestionText index={index + 1} heading="Are you interested in funding?">
        <p className="section__p">Select one to proceed.</p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={findFirstNullQuestion(answers) === undefined ? 'development' : 'development'}
        nextQuestion={"development"}
        question={question}
        options={[
          {
            // imgSrc: questionSvg,
            text: "YES",
            info: (
              <>
                We have helped raise up to $6 million for apps. And we help
                entrepreneurs with some funding. Conditions apply.
              </>
            ),
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.YES,
          },
          {
            // imgSrc: textSvg,
            text: "NO",
            info: (
              <>
                We have helped raise up to $6 million for apps. And we help
                entrepreneurs with some funding. Conditions apply.
              </>
            ),
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

FundingQuestion.propTypes = {
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
FundingQuestion.defaultProps = {
  prevQuestion: null,
};

export default FundingQuestion;
