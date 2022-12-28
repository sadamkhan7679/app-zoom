import React from 'react'
import NameFormRow, { INPUT_TYPE } from './nameFormRow'
import styles from './styles.module.css'
import VALIDATORS from '../../../../util/validators'
import PRICING_ACTIONS from '../../../../redux/actions/Pricing'
import NameButton from './nameButton'
import PropTypes from "prop-types";

const NameForm = ({ question, name, }) => (
  <div className="container">
    <div className={styles.container}>
      <NameFormRow
        name={name}
        title="Name"
        inputType="text"
        selector={(state) => state.Pricing.name}
        actionFn={PRICING_ACTIONS.setName}
        validator={VALIDATORS.NAME}
        hint="Name must be alphabetical characters separated by a space."
      />
      <NameButton question={question}/>
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
  name: null,
  question: null,
}

export default NameForm
