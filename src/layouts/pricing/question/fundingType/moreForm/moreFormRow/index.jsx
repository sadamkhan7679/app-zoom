import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import 'react-phone-input-2/lib/style.css'
import styles from './styles.module.css'


const MoreFormRow = ({
  selector, name, disabled, inputType, answers, type, setAnswers, answer
}) => {
  // Hooks
  // const value = useSelector(selector)
  // const dispatch = useDispatch()
  // Events
  const handleDefaultChange = (e) => {
    // const action = actionFn(e.target.value)
    // dispatch(action)
    setAnswers({ ...answers, [type]: !answer })
  }
  const handleOtherChange = (e) => {
    setAnswers({ ...answers, others: e.target.value === "" ? null : e.target.value })
  }

  // Computations
  // Render
  return (
    disabled ?
      <input
        type={inputType}
        value={answer ? answer : ""}
        placeholder={'Other'}
        className={styles.input}
        style={{ backgroundColor: "white", textAlign:'left' }}
        onChange={handleOtherChange}
      />
      :
      <div
        className={styles.input}
        style={{ backgroundColor: 'white' }}
        onClick={handleDefaultChange}
      >
        <input type="checkbox" id={name} name={name} value={true} checked={answer} onChange={handleDefaultChange}/>
        <label>{name}</label><br></br>
      </div>
  )
}

MoreFormRow.propTypes = {
  title: PropTypes.string,
  inputType: PropTypes.string,
  selector: PropTypes.func,
  actionFn: PropTypes.func,
  type: PropTypes.string,
  hint: PropTypes.string,
  name: PropTypes.string,
}

MoreFormRow.defaultProps = {
  type: null,
  name: null,
}

export default MoreFormRow
