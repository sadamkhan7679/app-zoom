import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useSelector } from "react-redux";
import path from "path";
import styles from "./styles.module.css";
import QuestionOption from "./questionOption";
import findFirstNullQuestion from "../../../../functions/pricing/findFirstNullQuestion";
import putPricingState from "../../../../procedures/pricing/putPricingState";
import packPricingObject from "../../../../functions/pricing/packPricingObject";

const QuestionOptionGroup = ({ question, options, nextQuestion }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, hasSignedUp, linkCount, id } = useSelector(
    (state) => state.Pricing
  );

  // Constants
  const rowSize = 3;

  // Functions

  React.useEffect(() => {
    updateDb();
  }, [answers]);

  const updateDb = () => {
    if (linkCount > 0 && Pricing.id) {
      const pricingObject = packPricingObject(Pricing);
      putPricingState(Pricing.id, pricingObject);
    }
  };

  const getTo = () => {
    if (nextQuestion === "testimonials2") {
      return `/${nextQuestion}`;
    } else {
      return `/cost-to-make-an-app/${nextQuestion}`;
    }

    // const firstNullQuestion = findFirstNullQuestion(answers, question.id)

    // // console.log(firstNullQuestion,'firstNullQuestion')
    // // If not all question have been answered...
    // // move to next unanswered question.
    // // if (firstNullQuestion && firstNullQuestion.id !== "signupGreeting") {
    // //   return path.join('/cost-to-make-an-app', firstNullQuestion.id)
    // // }
    // if (firstNullQuestion && firstNullQuestion.id !== "signupGreeting") {
    //   console.log(question.id)
    //   if (linkCount === 0 && firstNullQuestion.id === 'development') {
    //     return path.join('/cost-to-make-an-app', "signupGreeting")
    //   }
    //   else if (firstNullQuestion.id === 'fundingType' && answers.get('funding') === 'no') {

    //     return path.join('/cost-to-make-an-app', 'context')
    //   }
    //   // else if(question.id === 'fundingType'){
    //   //   return path.join('/cost-to-make-an-app', '')
    //   // }
    //   return path.join('/cost-to-make-an-app', firstNullQuestion.id)
    // }

    // // Otherwise, if not signed up...
    // // move to sign up form.
    // if (!hasSignedUp) {
    //   return '/cost-to-make-an-app/sign-up'
    // }

    // // Otherwise...
    // // go to estimate.

    // if (
    //   answers.get('development') === 'no' &&
    //   answers.get('funding') === 'no' &&
    //   answers.get('features') === 'yes' &&
    //   answers.get('marketing ') === 'no' &&
    //   answers.get('technology') === 'no'
    // ) {
    //   return '/cost-to-make-an-app/zero'

    // }
    // return '/cost-to-make-an-app/more'
    // // return '/cost-to-make-an-app/signupGreeting'
  };

  // Computations
  const to = getTo();
  const colWidth = 12;
  const optionGroups = [];
  const optionsIn = [...options];
  for (
    let group = 0, limit = options.length / rowSize;
    group < limit;
    group += 1
  ) {
    const optionGroup = [];
    for (let index = 0; index < rowSize; index += 1) {
      if (optionsIn.length === 0) {
        break;
      }
      const option = optionsIn.shift();
      optionGroup.push(option);
    }
    optionGroups.push(optionGroup);
  }

  // console.log("Next page from here");

  // Render
  return (
    <div className={clsx("container", styles.container)}>
      <div className={styles.block}>
        {optionGroups.map((optionGroup) => (
          <div key={Math.random() * 1000 + "opg"} className="row px-3">
            {optionGroup.map((option) => (
              <div
                key={option.text + Math.random() * 100}
                className={clsx(`col-${colWidth}`, styles.col)}
              >
                <QuestionOption
                  to={to}
                  imgSrc={option.imgSrc}
                  text={option.text}
                  info={option.info}
                  priceText={option.priceText}
                  questionId={option.questionId}
                  answerId={option.answerId}
                  updateDb={updateDb}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

QuestionOptionGroup.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      info: PropTypes.node.isRequired,
      questionId: PropTypes.string.isRequired,
      answerId: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuestionOptionGroup;
