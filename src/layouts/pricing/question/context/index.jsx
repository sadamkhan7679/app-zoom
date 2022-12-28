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
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";

import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import calcFirstlandingPage from "../../../../functions/pricing/calcFirstlandingPage";

import { useDispatch, useSelector } from "react-redux";
import packPricingObject from "../../../../functions/pricing/packPricingObject";

const ContextQuestion = ({ index, question, prevQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, verifyCount, charge } = Pricing;
  const dispatch = useDispatch();

  console.log(question);
  console.log(prevQuestion);

  React.useEffect(() => {
    Pricing.answers.mapKeys((key, value) => console.log(key + " :", value));
  }, []);

  // useEffect(() => {
  //   if(Pricing.answers.get(question.id)){
  //     result = Pricing.answers.get(question.id)
  //   }
  // }, [Pricing.answers.get(question.id)])
  return (
    <>
      <EstimateBar />
      <QuestionNumber index={index + 1} count={QUESTIONS.length} />
      <div className={classConcat("container", styles.container)}>
        <h4 className="section__h1">Context</h4>
        <p className="section__p">
          Various collaboration options are available through OpZoom such as
          investments, partnerships and discounts.
        </p>
        <p className="section__p">
          This information helps us understand what you need to move forward
          with the app.
        </p>
      </div>
      <QuestionText index={index + 1} heading="What is this estimate for?">
        <p className="section__p">Please select an option.</p>
      </QuestionText>
      <QuestionOptionGroup
        nextQuestion={"technology"}
        // nextQuestion={
        //   findFirstNullQuestion(answers) === undefined
        //     ? calcFirstlandingPage(charge, verifyCount)
        //     : "technology"
        //   // (result && result !== 'personal' ? 'referral' : 'patent')
        // }
        question={question}
        options={[
          {
            imgSrc: null,
            text: "Supporting an existing company",
            info: (
              <>
                If this app will be used as a marketing channel for an existing
                company.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: "company",
          },
          {
            imgSrc: null,
            text: "I plan to build and own this app",
            info: <>If this is part of a product that you plan to build.</>,
            priceText: null,
            questionId: question.id,
            answerId: "personal",
          },
          {
            imgSrc: null,
            text: "I'm doing work for a client",
            info: (
              <>
                If you are seeking a app development partner to build out an app
                for your client.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: "client",
          },
          {
            imgSrc: null,
            text: "An academic project",
            info: <>If this is a cost estimate for a course.</>,
            priceText: null,
            questionId: question.id,
            answerId: "academic",
          },
          {
            imgSrc: null,
            text: "Other",
            info: (
              <>
                If none of the above choices correctly describes your situation.
              </>
            ),
            priceText: null,
            questionId: question.id,
            answerId: "other",
          },
        ]}
      />
      <GoBack prevQuestionId={prevQuestion.id} />
    </>
  );
};

ContextQuestion.propTypes = {
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

ContextQuestion.defaultProps = {
  prevQuestion: null,
};

export default ContextQuestion;
