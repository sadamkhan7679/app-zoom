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
import { useDispatch, useSelector } from "react-redux";
import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";

const FeatureQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Additional Features</h4>
        <p className="section__p">
          Many additional features are in high demand such as:
          <ul>
            <li>
              <b>Messaging</b>: to let people to talk to each other on the app
            </li>
            <li>
              <b>Comments</b>: so people can react on other people's posts
            </li>
            <li>
              <b>Payments</b>: to get paid for the service through credit cards,
              bank payments (ACH), bitcoin
            </li>
            <li>
              <b>HIPPA Compliance</b>: for medical companies
            </li>
            <li>
              <b>Artificial Intelligence</b>: to recognize patterns or images
            </li>
          </ul>
        </p>
      </div>
      <QuestionText
        index={index + 1}
        heading="Does your app need additional features?"
      >
        <p className="section__p">Select an option.</p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge, verifyCount) : 'context'}
        nextQuestion={"context"}
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
          {
            // imgSrc: textSvg,
            text: " I don’t know",
            info: <>DONT KNOW</>,
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.DONT_KNOW,
          },
        ]}
      />
      <GoBack prevQuestionId={prevQuestion.id} />
    </>
  );
};

FeatureQuestion.propTypes = {
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

FeatureQuestion.defaultProps = {
  prevQuestion: null,
};

export default FeatureQuestion;
