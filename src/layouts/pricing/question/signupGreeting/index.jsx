import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import QUESTIONS from "../../../../constants/pricing/questions";
// import EstimateBar from "../../../../components/pricing/estimate/estimateBar";
// import QuestionNumber from "../../../../components/pricing/question/questionNumber";
import QuestionText from "../../../../components/pricing/question/questionText";
// import QuestionOptionGroup from "../../../../components/pricing/question/questionOptionGroup";
import GoBack from "../../../../components/pricing/goBack";
// import formSvg from "../../../../assets/pricing/form.svg";
// import noFormSvg from "../../../../assets/pricing/no-form.svg";
import GreetingForm from "../../../../components/pricing/greeting/greetingForm";
import { useSelector } from "react-redux";
import useClidParser from "../../../../hooks/pricing/useClidParser";
import checkLinkCount from "../../../../functions/pricing/checkLinkCount";
import Swal from "sweetalert2";

const SignupGreeting = ({ index, question, prevQuestion }) => {
  // const Pricing = useSelector((state) => state.Pricing);
  // const updated = Pricing.answers.get("signupGreeting")

  const Pricing = useSelector((state) => state.Pricing);
  const { email, linkCount, charge } = Pricing;
  useClidParser();

  useEffect(() => {
      console.log("hook")
    checkLinkCount(linkCount, charge);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />

      <QuestionText
        index={"Please click on the link sent to your email to continue"}
        // heading="User Created Continue Using Email"
      >
        <p className="section__p">
          If you don’t see the link in a few seconds, please resend below.
        </p>
        {/* <h3 className="section__p">
          Please continue with the estimate by clicking on the link we sent to your email.
          </h3> */}
      </QuestionText>
      <GreetingForm email={email} question={question} />
      <GoBack prevQuestionId={prevQuestion.id} />
    </>
  );
};

SignupGreeting.propTypes = {
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

SignupGreeting.defaultProps = {
  prevQuestion: null,
};

export default SignupGreeting;
