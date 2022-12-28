import React from 'react'
import MoreFormRow, { INPUT_TYPE } from './moreFormRow'
import styles from './styles.module.css'
import VALIDATORS from '../../../../../util/validators'
import PRICING_ACTIONS from '../../../../../redux/actions/Pricing'
import MoreButton from './moreButton'
import PropTypes from "prop-types";

const NameForm = ({ question, email }) => (
  <div className="container">
    <div className={styles.container}>
      <MoreFormRow
        email={email}
        title="Name"
        inputType="text"
        selector={(state) => state.Pricing.email}
        actionFn={PRICING_ACTIONS.setEmail}
        validator={VALIDATORS.EMAIL}
        hint=""
      />
      <MoreButton question={question} />
    </div>
  </div>
)



NameForm.propTypes = {
  name: PropTypes.string,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
}
NameForm.defaultProps = {
  name: null
}

export default NameForm
