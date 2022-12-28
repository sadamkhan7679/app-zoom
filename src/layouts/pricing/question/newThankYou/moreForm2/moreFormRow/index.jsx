import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './styles.module.css'
import classConcat from '../../../../../../util/ClassConcat'

export const INPUT_TYPE = {
  PHONE: 'PHONE',
}

const MoreFormRow = ({
  title, inputType, selector,
  actionFn, validator, type, hint, email
}) => {
  // Hooks
  const value = useSelector(selector)
  const dispatch = useDispatch()
  // Events
  const handleDefaultChange = (e) => {
    const action = actionFn(e.target.value)
    dispatch(action)
  }
  const handlePhoneChange = (phone, country, e, phoneFormatted) => {
    const action = actionFn(phone, phoneFormatted)
    dispatch(action)
  }
  // Computations
  const isValid = value && validator(value)
  // Render
  // alert(inputType)
  return (
    <div className="row px-3 py-1">
      <div className="col-12">
        <span className={styles.title}>
          {title}
        </span>
      </div>
      <div className="col-12">
        {(() => {
          switch (inputType) {
            case "PHONE":
              return (
                <PhoneInput
                  country="us"
                  value={email}
                  inputClass={classConcat(
                    styles.input,
                    isValid === false ? styles.inputInvalid : null,
                    isValid === true ? styles.inputValid : null,
                  )}
                  onChange={handlePhoneChange}
                />
              )
            default:
              return (
                <input
                  type={inputType}
                  value={email}
                  className={classConcat(
                    styles.input,
                    isValid === false ? styles.inputInvalid : null,
                    isValid === true ? styles.inputValid : null,
                  )}
                  onChange={handleDefaultChange}
                />
              )
          }
        })()}
      </div>
      <div className={classConcat('col-12', styles.hintCol)}>
        <span
          className={classConcat(
            styles.hint,
            isValid === false ? styles.hintVisible : null,
          )}
        >
          {hint}
        </span>
      </div>
    </div>
  )
}

MoreFormRow.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  selector: PropTypes.func.isRequired,
  actionFn: PropTypes.func.isRequired,
  validator: PropTypes.func.isRequired,
  type: PropTypes.string,
  hint: PropTypes.string.isRequired,
  name: PropTypes.string,
}

MoreFormRow.defaultProps = {
  type: null,
  name: null,
}

export default MoreFormRow
