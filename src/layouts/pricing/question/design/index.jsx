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
import appSvg from "../../../../assets/pricing/app.svg";
import figmaSvg from "../../../../assets/pricing/figma.svg";
import pencilSvg from "../../../../assets/pricing/pencil.svg";
import questionSvg from "../../../../assets/pricing/question.svg";
import textSvg from "../../../../assets/pricing/text.svg";
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";

import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";

import { test } from "../../../../library/api/pageLoad";
import settings from "../../../../library/settings";

import { useDispatch, useSelector } from "react-redux";

const DesignQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;

  // let uid = document.cookie
  //   .split(";")
  //   .find((cookies) => cookies.includes(" uid"));

  const dispatch = useDispatch();
  React.useEffect(() => {
    // test({
    //   // stage: process.env.BUILD_ENV,
    //   stage: settings.test,
    //   uid: uid ? uid.split("=")[1] : null,
    //   url: window.location.href,
    // });

    const inDev = PRICING_ACTIONS.inDev();
    dispatch(inDev);
    // const setAnswer = PRICING_ACTIONS.setAnswer("design", null)
    // dispatch(setAnswer)
  }, []);

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Design Specification</h4>
        <p className="section__p">
          To save time and cost of building an app, a clear vision for user
          experience of the app is needed. The design documents help designers
          and developers plan their work and estimate the time investment they
          would have to make.
        </p>
        <p className="section__p">
          People start at various points with OpZoom.
          <br />
          Please help us understand how you plan to communicate the idea of your
          app to us.
        </p>
      </div>
      <QuestionText
        index={index + 1}
        heading="What type of design do you have?"
      >
        <p className="section__p">Select one option.</p>
      </QuestionText>
      <QuestionOptionGroup
        nextQuestion={"funding"}
        // nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge,verifyCount) : 'funding'}
        question={question}
        options={[
          {
            imgSrc: questionSvg,
            text: "No Design",
            info: (
              <>
                Is your app mostly in your mind? We can learn what you want
                based on your descriptions and a few iterations.
              </>
            ),
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.NONE,
          },
          {
            imgSrc: textSvg,
            text: "Verbal/Written Description",
            info: (
              <>
                Do you have a written description of how the app would work? We
                can build the screens based on your description.
              </>
            ),
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.WRITTEN,
          },
          {
            imgSrc: pencilSvg,
            text: "Pen-and-Paper",
            info: (
              <>Do you have pen-on-paper drawings of the app you want built?</>
            ),
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.PAPER,
          },
          {
            imgSrc: appSvg,
            text: "Sample/Reference App",
            info: (
              <>
                Can you point us to one or more apps that you want to model the
                app on?
              </>
            ),
            priceText: "$$$",
            questionId: question.id,
            answerId: question.answerIds.REF_APP,
          },
          {
            imgSrc: figmaSvg,
            text: "XD, Sketch or Figma",
            info: (
              <>
                Design files specify exactly what the app will look like
                including details such as colors used, spacing between images
                and font sizes.
              </>
            ),
            priceText: "$",
            questionId: question.id,
            answerId: question.answerIds.DIGITAL,
          },
        ]}
      />
      <GoBack prevQuestionId={"login"} />
    </>
  );
};

DesignQuestion.propTypes = {
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

DesignQuestion.defaultProps = {
  prevQuestion: null,
};

export default DesignQuestion;
