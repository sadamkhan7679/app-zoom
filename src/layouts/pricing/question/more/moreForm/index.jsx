import React from 'react'
import MoreFormRow, { INPUT_TYPE } from './moreFormRow'
import styles from './styles.module.css'
import VALIDATORS from '../../../../../util/validators'
import PRICING_ACTIONS from '../../../../../redux/actions/Pricing'
import MoreButton from './moreButton'
import PropTypes from "prop-types";

const NameForm = ({ question, email, phone }) => (
  <div className="container">
    <div className={styles.container}>
      {/* <MoreFormRow
        email={email}
        title={phone ? "Phone" : "Email"}
        inputType={phone ? INPUT_TYPE.PHONE : "text"}
        selector={(state) => state.Pricing.email}
        actionFn={PRICING_ACTIONS.setEmail}
        validator={VALIDATORS.EMAIL}
        hint=""
      /> */}
      {
        phone ?
          <MoreFormRow
            email={email}
            title={"Phone"}
            inputType={"PHONE"}
            selector={(state) => state.Pricing.phone}
            actionFn={PRICING_ACTIONS.setPhone}
            validator={VALIDATORS.PHONE}
            hint=""
          />
          :
          <MoreFormRow
            email={email}
            title={"Email"}
            inputType={"text"}
            selector={(state) => state.Pricing.email}
            actionFn={PRICING_ACTIONS.setEmail}
            validator={VALIDATORS.EMAIL}
            hint=""
          />
      }
      {
        // (phone == true) &&
        // <MoreButton phoneToggle={phone} question={question} />
      }
    </div>
  </div>
)

export default NameForm
