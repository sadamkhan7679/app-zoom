import React from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
import PlatformsQuestion from "./platforms";
// import Name from "./name";
import LoginQuestion from "./login";
import Development from "./development";
import DesignQuestion from "./design";
import FundingQuestion from "./funding";
import FundinTypeQuestion from "./fundingType";
import LevelOfDetailQuestion from "./levelOfDetail";
import FeaturesQuestion from "./features";
import ContextQuestion from "./context";
import ReferralQuestion from "./referral";
import PatentQuestion from "./patent";
import TechnologyQuestion from "./technology";
import MarketingQuestion from "./marketing";
// import DownpaymentQuestion from './downpayment';
import SignupGreeting from "./signupGreeting";
import Zero from "./zero";
import More from "./more";

import QUESTIONS from "../../../constants/pricing/questions";
import useClidParser from "../../../hooks/pricing/useClidParser";
import { useSelector } from "react-redux";

const QuestionNodes = Map([
  ["platforms", PlatformsQuestion],
  // ["name", Name],
  ["login", LoginQuestion],
  ["design", DesignQuestion],
  ["funding", FundingQuestion],
  // ["fundingType", FundinTypeQuestion],
  ["development", Development],
  ["level-of-detail", LevelOfDetailQuestion],
  ["features", FeaturesQuestion],
  ["context", ContextQuestion],
  // ["referral", ReferralQuestion],
  // ["patent", PatentQuestion],
  ["technology", TechnologyQuestion],
  ["marketing", MarketingQuestion],
  // ["downpayment", DownpaymentQuestion],
  ["signupGreeting", SignupGreeting],

  // ["zero", Zero],
  // ["more", More],
]);

const QuestionLayout = ({ question }) => {
  if (!question || !question.id) return null;
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;

  useClidParser();

  const QuestionNode = QuestionNodes.get(question.id);

  const questionIndex = QUESTIONS.indexOf(question);
  let prevQuestion;

  // if (answers.get('context') === 'personal') {
  //   prevQuestion = questionIndex > 0 ? QUESTIONS[questionIndex - 2] : null
  // }
  // else {
  prevQuestion = questionIndex > 0 ? QUESTIONS[questionIndex - 1] : null;
  // }

  return (
    <>
      <QuestionNode
        index={questionIndex}
        question={question}
        prevQuestion={prevQuestion}
      />
    </>
  );
};

QuestionLayout.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
};

export default QuestionLayout;
