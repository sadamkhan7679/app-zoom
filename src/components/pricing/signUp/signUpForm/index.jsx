import React from "react";
import SignUpFormRow, { INPUT_TYPE } from "./signUpFormRow";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../util/validators";
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";
import SignUpButton from "./signUpButton";

const SignUpForm = () => (
  <div className="container">
    <div className={styles.container}>
      <SignUpFormRow
          title="Name"
          inputType="text"
          selector={(state) => state.Pricing.name}
          actionFn={PRICING_ACTIONS.setName}
          validator={VALIDATORS.NAME}
          type={INPUT_TYPE.NAME}
          hint="Name must be alphabetical characters separated by a space."
      />
      <SignUpFormRow
        title="Email"
        inputType="email"
        selector={(state) => state.Pricing.email}
        actionFn={PRICING_ACTIONS.setEmail}
        validator={VALIDATORS.EMAIL}
        hint="Must be in valid email format. (e.g. bob@mail.com)"
      />
      {/* <SignUpFormRow
        title="Phone Number"
        inputType="text"
        selector={(state) => state.Pricing.phone}
        actionFn={PRICING_ACTIONS.setPhone}
        validator={VALIDATORS.PHONE}
        type={INPUT_TYPE.PHONE}
        hint="Should be a US phone number with 10 digits."
      /> */}
      <SignUpButton />
    </div>
  </div>
);

export default SignUpForm;
