import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navigate } from "@reach/router";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../../util/validators";
import PRICING_ACTIONS from '../../../../../redux/actions/Pricing'
import PropTypes from "prop-types";
import findFirstNullQuestion from "../../../../../functions/pricing/findFirstNullQuestion";

const NameButton = ({
  question,
}) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { name, answers } = Pricing;
  const dispatch = useDispatch();

  // Functions
  const isNameValid = () => name && VALIDATORS.NAME(name);

  // Events
  const handleClick = async () => {
    // fireConversion()

    // Create record on database.
    const setAnswer = PRICING_ACTIONS.setAnswer(question.id, question.answerIds.NAME)
    dispatch(setAnswer)
    if (findFirstNullQuestion(answers) === undefined) {
      console.log("more" )
      navigate("/cost-to-make-an-app/more");
    }
    else {
      console.log("login" )
      navigate("/cost-to-make-an-app/login");
    }
  };

  // Computations
  const enabled = isNameValid();

  // Render
  return (
    <div className={clsx("container-fluid", "py-2", styles.container)}>
      <button
        type="button"
        className={clsx(styles.button, enabled ? null : styles.disabled)}
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
};

NameButton.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
}

export default NameButton
