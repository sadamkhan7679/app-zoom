import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./styles.module.css";
import classConcat from "../../../../../util/ClassConcat";
import MoreFormRow from "../../../../../layouts/pricing/question/fundingType/moreForm/moreFormRow";

export const INPUT_TYPE = {
  PHONE: "PHONE",
  NAME: "NAME",
  MESSAGE: "MESSAGE",
};

const SignUpFormRow = ({
  title,
  inputType,
  selector,
  actionFn,
  validator,
  type,
  hint,
}) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { email, name, phone, tempEmail, message } = Pricing;
  const value = useSelector(selector);
  const dispatch = useDispatch();
  const [moreOther, setMoreOther] = useState("");
  const [moreArray, setMoreArray] = useState([]);
  // Events

  var MoreQuestionsData = [
    "Get the FREE App Design Offer",
    "Learn about Funding Options",
    "Get Sample Apps from OpZoom",
    "Review Patenting Process",
    "See Sample App Making Documents",
  ];

  const handleDefaultChange = (e) => {
    const action = actionFn(e.target.value);
    dispatch(action);
  };
  const handleMoreOtherInput = (e) => {
    let ind = moreArray.indexOf(moreOther);

    if (ind === -1) {
      setMoreArray([...moreArray, e.target.value]);
      const action = actionFn([...moreArray, e.target.value]);
      dispatch(action);
    } else {
      let tempArr = [...moreArray];
      tempArr.splice(ind, 1);
      setMoreArray([...tempArr, e.target.value]);
      const action = actionFn([...tempArr, e.target.value]);
      dispatch(action);
    }
    setMoreOther(e.target.value);

    // const action = actionFn(moreArray);
    // dispatch(action);
  };

  const handleMoreCheckboxAnswer = (e) => {
    if (e.target.checked) {
      setMoreArray([...moreArray, e.target.value]);

      const action = actionFn([...moreArray, e.target.value]);
      dispatch(action);
    } else {
      // console.log(moreArray.indexOf(e.target.value))
      moreArray.splice(moreArray.indexOf(e.target.value), 1);
      setMoreArray([...moreArray]);

      const action = actionFn([...moreArray]);
      dispatch(action);
    }
    // const action = actionFn(moreArray);
    // dispatch(action);
  };

  // console.log(moreArray);

  const handlePhoneChange = (phone, country, e, phoneFormatted) => {
    const action = actionFn(phone, phoneFormatted);
    dispatch(action);
  };
  // Computations
  const isValid = value && validator(value);
  // Render
  return (
    <div className="row px-3 py-1">
      <div className="col-12">
        <span className={styles.title}>{title}</span>
      </div>
      <div className="col-12">
        {(() => {
          switch (type) {
            case INPUT_TYPE.PHONE:
              return (
                <PhoneInput
                  country="us"
                  value={phone}
                  inputClass={classConcat(
                    styles.input,
                    isValid === false ? styles.inputInvalid : null,
                    isValid === true ? styles.inputValid : null
                  )}
                  inputProps={{
                    required: true,
                  }}
                  onChange={(e) => handlePhoneChange(e)}
                />
              );
            case INPUT_TYPE.NAME:
              return (
                <input
                  defaultValue={name}
                  type={inputType}
                  required
                  className={classConcat(
                    styles.input,
                    isValid === false ? styles.inputInvalid : null,
                    isValid === true ? styles.inputValid : null
                  )}
                  onChange={(e) => handleDefaultChange(e)}
                />
              );
            case INPUT_TYPE.MESSAGE:
              return (
                <>
                  {MoreQuestionsData.map((singleAnswer, ind) => (
                    <div
                      key={ind}
                      className={styles.input}
                      style={{
                        backgroundColor: "white",
                        textAlign: "left",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id={ind}
                        // name={"Question"}
                        value={singleAnswer}
                        // checked={}
                        onChange={(e) => handleMoreCheckboxAnswer(e)}
                      />
                      <label
                        style={{ marginLeft: "10px", marginBottom: "0px" }}
                      >
                        {singleAnswer}
                      </label>
                      <br></br>
                    </div>
                  ))}
                  <input
                    type="text"
                    placeholder={"Other"}
                    className={styles.input}
                    style={{ backgroundColor: "white", textAlign: "left" }}
                    value={moreOther}
                    onChange={(e) => handleMoreOtherInput(e)}
                  />
                </>
                // <textarea
                //   defaultValue={message}
                //   type={inputType}
                //   required
                //   className={classConcat(
                //     styles.input,
                //     isValid === false ? styles.inputInvalid : null,
                //     isValid === true ? styles.inputValid : null,
                //   )}
                //   onChange={handleDefaultChange}
                // />
              );
            default:
              return (
                <input
                  defaultValue={email}
                  type={inputType}
                  required
                  className={classConcat(
                    styles.input,
                    isValid === false ? styles.inputInvalid : null,
                    isValid === true ? styles.inputValid : null
                  )}
                  onChange={(e) => handleDefaultChange(e)}
                />
              );
          }
        })()}
      </div>
      {/* <div className={classConcat('col-12', styles.hintCol)}>
        <span
          className={classConcat(
            styles.hint,
            isValid === false ? styles.hintVisible : null,
          )}
        >
          {hint}
        </span>
      </div> */}
    </div>
  );
};

SignUpFormRow.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  selector: PropTypes.func.isRequired,
  actionFn: PropTypes.func.isRequired,
  validator: PropTypes.func.isRequired,
  type: PropTypes.string,
  hint: PropTypes.string.isRequired,
  email: PropTypes.string,
};

SignUpFormRow.defaultProps = {
  type: null,
  email: "",
};

export default SignUpFormRow;
