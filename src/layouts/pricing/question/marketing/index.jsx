import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

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

const MarketingQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Marketing</h4>
        <p className="section__p">
          OpZoom can help market your app in a few ways including pay per click
          ads and SEO.
        </p>
        <p className="section__p">
          Companies use the marketing technology to get in front of a lot of
          users quickly.
        </p>
      </div>
      <QuestionText
        index={index + 1}
        heading="Do you need help marketing your app?"
      >
        <p className="section__p">Please select an option.</p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={
        //   findFirstNullQuestion(answers) === undefined
        //     ? calcFirstlandingPage(charge, verifyCount)
        //     : "sign-up"
        // }
        nextQuestion={"testimonials2"}
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

MarketingQuestion.propTypes = {
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

MarketingQuestion.defaultProps = {
  prevQuestion: null,
};

export default MarketingQuestion;
