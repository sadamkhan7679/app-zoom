import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import classConcat from "../../../../util/ClassConcat";
import QUESTIONS from "../../../../constants/pricing/questions";
import EstimateBar from "../../../../components/pricing/estimate/estimateBar";
import QuestionNumber from "../../../../components/pricing/question/questionNumber";
import QuestionText from "../../../../components/pricing/question/questionText";
import QuestionOptionGroup from "../../../../components/pricing/question/questionOptionGroup";
import GoBack from "../../../../components/pricing/goBack";
//
import bareBonesPng from "../../../../assets/pricing/bare-bones.png";
import beautifulPng from "../../../../assets/pricing/beautiful.png";
import detailedPng from "../../../../assets/pricing/detailed.png";
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";

import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";

import { useSelector, useDispatch } from "react-redux";

const LevelOfDetailQuestion = ({ index, question, prevQuestion }) => {
  const { answers, verifyCount, charge } = useSelector(
    (state) => state.Pricing
  );
  const dispatch = useDispatch();

  let prevQuestionId =
    answers.get("funding") === "no" ? "funding" : prevQuestion.id;

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Level of Detail</h4>
        <p className="section__p">
          Detailed apps take more time to build because each detail typically
          takes time to design, build and test.
        </p>
        <p className="section__p">
          There is a tradeoff to consider here. The more detailed your app is,
          the more likely it is to be appealing to users. However, a lower level
          of detail enables you to quickly test and improve your app with a low
          budget.
        </p>
        <p className="section__p">This impacts the cost of your app.</p>
      </div>
      <QuestionText index={index + 1} heading="How detailed is your app?">
        <p className="section__p">Please select one option.</p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge,verifyCount) : 'features'}
        nextQuestion={"features"}
        question={question}
        options={[
          {
            imgSrc: bareBonesPng,
            text: "Bare Bones",
            info: <>Only a few screens and bare essentials content.</>,
            priceText: "$",
            questionId: question.id,
            answerId: question.answerIds.BARE_BONES,
          },
          {
            imgSrc: detailedPng,
            text: "Detailed",
            info: (
              <>
                This includes apps that have a lot of interactions and
                transitions in the app.
              </>
            ),
            priceText: "$$",
            questionId: question.id,
            answerId: question.answerIds.DETAILED,
          },
          {
            imgSrc: beautifulPng,
            text: "Beautiful",
            info: (
              <>
                In addition to detail, beautiful apps have aesthetic appeal. We
                present multiple design ideas to find the best suited user
                experiences.
              </>
            ),
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.BEAUTIFUL,
          },
        ]}
      />
      <GoBack prevQuestionId={"development"} />
    </>
  );
};

LevelOfDetailQuestion.propTypes = {
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

LevelOfDetailQuestion.defaultProps = {
  prevQuestion: null,
};

export default LevelOfDetailQuestion;
