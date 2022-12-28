import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import QUESTIONS from "../../../../constants/pricing/questions";
import EstimateBar from "../../../../components/pricing/estimate/estimateBar";
import QuestionNumber from "../../../../components/pricing/question/questionNumber";
import QuestionText from "../../../../components/pricing/question/questionText";
import QuestionOptionGroup from "../../../../components/pricing/question/questionOptionGroup";
import GoBack from "../../../../components/pricing/goBack";
//
import formSvg from "../../../../assets/pricing/form.svg";
import noFormSvg from "../../../../assets/pricing/no-form.svg";
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";
import classConcat from "../../../../util/ClassConcat";

import { useSelector, useDispatch } from "react-redux";
import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";

const LoginQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { hasSignedUp, linkCount, answers, verifyCount, charge } = Pricing;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const setAnswer = PRICING_ACTIONS.setAnswer("login", "no");
    dispatch(setAnswer);
  }, []);

  const goto = () => {
    return findFirstNullQuestion(answers) === undefined
      ? calcFirstlandingPage(charge, verifyCount)
      : "design";
  };

  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">User Management</h4>
        <p className="section__p">
          To support any method of giving users an app experience that is
          specific to them we will have to manage users. This enables us to
          store data specific to users and communicate with them on an
          individual basis.
        </p>
        <p className="section__p">
          We need this to support features such as user profiles, messaging and
          chat.
        </p>
        <p className="section__p">
          Users may be able to log in with emails, phone numbers, social
          platform logins such as Google, Facebook or LinkedIn.
        </p>
      </div>
      <QuestionText
        index={index + 1}
        heading="Will users have to login to the app?"
      >
        <p className="section__p">Select one option.</p>
      </QuestionText>
      <QuestionOptionGroup
        // nextQuestion={goto()}
        nextQuestion={"design"}
        question={question}
        options={[
          {
            imgSrc: formSvg,
            text: "User Management System",
            info: (
              <>
                If you need users to uniquely identify themselves with logins
                and passwords, pick this. This is used for features like chat
                and document uploads where the app shows different content to
                different users.
              </>
            ),
            priceText: "$$",
            questionId: question.id,
            answerId: question.answerIds.YES,
          },
          {
            imgSrc: noFormSvg,
            text: "No User Management System",
            info: (
              <>
                If your app is an information site or an e-commerce site, and
                you don&apos;t need to identify users then this may be the
                choice for you.
              </>
            ),
            priceText: "$",
            questionId: question.id,
            answerId: question.answerIds.NO,
          },
        ]}
      />
      <GoBack prevQuestionId={prevQuestion.id} />
    </>
  );
};

LoginQuestion.propTypes = {
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

LoginQuestion.defaultProps = {
  prevQuestion: null,
};

export default LoginQuestion;
