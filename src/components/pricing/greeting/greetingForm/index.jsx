import React from "react";
import SignUpFormRow, {
  INPUT_TYPE,
} from "../../signUp/signUpForm/signUpFormRow";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../util/validators";
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";
import SignUpButton from "../greetingButton";

const SignUpForm  = ({ question, email }) => (
  <div className="container">
    <div className={styles.container}>
      <SignUpFormRow
        email={email}
        title="Email"
        inputType="text"
        selector={(state) => state.Pricing.email}
        actionFn={PRICING_ACTIONS.setEmail}
        validator={VALIDATORS.EMAIL}
        hint="Must be in valid email format. (e.g. bob@mail.com)"
      />
      <SignUpButton question={question}  />
    </div>
  </div>
);

SignUpForm.propTypes = {
  email: PropTypes.string,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
}
SignUpForm.defaultProps = {
  email: null
}
export default SignUpForm;
