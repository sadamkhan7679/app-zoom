import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import * as axios from "axios";
import VALIDATORS from "../../../../../../util/validators";
import SendCode from "../../../../../../procedures/pricing/sendCode";
import putPricingState from "../../../../../../procedures/pricing/putPricingState";

import Swal from "sweetalert2";
import packPricingObject from "../../../../../../functions/pricing/packPricingObject";
import PRICING_API_URL from "../../../../../../constants/pricing/apiUrl";
import PRICING_ACTIONS from "../../../../../../redux/actions/Pricing";

import PhoneInput from "react-phone-input-2";
import Spinner from "react-bootstrap/Spinner";
import "react-phone-input-2/lib/style.css";
import styles from "./styles.module.css";
import classConcat from "../../../../../../util/ClassConcat";

export const INPUT_TYPE = {
  PHONE: "PHONE",
};

const MoreFormRow = ({
  title,
  inputType,
  selector,
  actionFn,
  validator,
  type,
  hint,
  email1,
}) => {
  // Hooks
  const flagsInitilaizer = {
    showPhoneField: true,
    showCodeField: false,
  };
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [flags, setFlags] = useState(flagsInitilaizer);

  const value = useSelector(selector);
  const Pricing = useSelector((state) => state.Pricing);
  const { email, id, phone, tempEmail } = Pricing;
  const dispatch = useDispatch();
  // Events
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handlePhoneChange = (phone, country, e, phoneFormatted) => {
    const action = actionFn(phone, phoneFormatted);
    dispatch(action);
  };

  const isNameValid = () =>
    email && VALIDATORS.EMAIL(email) && phone && VALIDATORS.PHONE(phone);
  const enabled = isNameValid();
  // Computations
  const isValid = value && validator(value);

  const handleClick = async () => {
    setLoading(true);
    const pricingObject = packPricingObject(Pricing);
    const id = await SendCode(Pricing.id, pricingObject);
    console.log(id);
    setLoading(false);
    setFlags({
      ...flags,
      showPhoneField: false,
      showCodeField: true,
    });
    Swal.fire({
      title: "Enter Your Confirmation Code",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Confirm Code",
      confirmButtonColor: "#77CC6D",
      showLoaderOnConfirm: true,
      preConfirm: (code) => {
        const data = {
          code: code,
          email: Pricing.email,
          phone: Pricing.phone,
          clid: Pricing.clid,
          config: Pricing.config,
        };
        return axios({
          method: "put",
          url: `${PRICING_API_URL}/price/test_code/${Pricing.id}`,
          data: data,
        })
          .then((response) => {
            if (response.data !== 1) {
              throw new Error(response.statusText);
            }
            return response;
          })
          .catch((error) => {
            Swal.showValidationMessage(`Error: Wrong Code, Try Again`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed === true) {
        const action = PRICING_ACTIONS.setVerifyCount(Pricing.verifyCount + 1);
        dispatch(action);
        if (Pricing.id) {
          const pricingObject = packPricingObject(Pricing);
          putPricingState(Pricing.id, pricingObject);
        }
        navigate("/cost-to-make-an-app/estimate");
      }
    });
    // const receivedObject = await fetchPricingObject(Pricing.id);
    // const email = receivedObject.email;

    // const pricingObject = packPricingObject({ ...Pricing, email: Pricing.email, emails: [...Pricing.emails, tempEmail] });
    // await resendPricingState(Pricing.id, pricingObject);

    // const tempEmailAction = PRICING_ACTIONS.setTempEmail(Pricing.email);
    // dispatch(tempEmailAction);

    // const pricingObject = packPricingObject(Pricing)
    // putPricingState(id, pricingObject)
  };
  // Render
  // alert(inputType)
  return (
    <div>
      <div className="row px-3 py-1">
        <div className="col-12">
          <span className={styles.title}>{title}</span>
        </div>
        <div className="col-12">
          <PhoneInput
            country="us"
            value={phone}
            inputClass={classConcat(
              styles.input,
              isValid === false ? styles.inputInvalid : null,
              isValid === true ? styles.inputValid : null
            )}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
      <div className={clsx("container-fluid", "py-2", styles.container)}>
        <button
          type="button"
          className={clsx(styles.button, enabled ? null : styles.disabled)}
          onClick={handleClick}
        >
          {loading ? (
            <Spinner animation="border" role="status" color={"white"} />
          ) : (
            "Send Verification Code"
          )}
        </button>
      </div>
    </div>
  );
};

MoreFormRow.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  selector: PropTypes.func.isRequired,
  actionFn: PropTypes.func.isRequired,
  validator: PropTypes.func.isRequired,
  type: PropTypes.string,
  hint: PropTypes.string.isRequired,
  name: PropTypes.string,
};

MoreFormRow.defaultProps = {
  type: null,
  name: null,
};

export default MoreFormRow;
