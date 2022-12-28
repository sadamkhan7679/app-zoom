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
        <MoreButton phoneToggle={phone} question={question} />
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
