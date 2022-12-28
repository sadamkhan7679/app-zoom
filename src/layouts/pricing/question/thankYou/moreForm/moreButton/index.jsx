import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navigate } from "@reach/router";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../../../util/validators";
import PRICING_ACTIONS from '../../../../../../redux/actions/Pricing'
import PropTypes from "prop-types";

import fetchPricingObject from '../../../../../../functions/pricing/fetchPricingObject'
import putPricingState from '../../../../../../procedures/pricing/putPricingState'
import resendPricingState from '../../../../../../procedures/pricing/resendPricingState'

import packPricingObject from '../../../../../../functions/pricing/packPricingObject'

const MoreButton = ({
  question,
  phoneToggle
}) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { email, id, phone, tempEmail } = Pricing;
  const dispatch = useDispatch();

  // Functions
  // const isNameValid = () => email && VALIDATORS.EMAIL(email) && phone && VALIDATORS.PHONE(phone)

  const isNameValid = () => email && VALIDATORS.EMAIL(email) && phone && VALIDATORS.PHONE(phone)

  // let isNameValid;

  // if (phoneToggle) {
  //   isNameValid = () => phone && VALIDATORS.PHONE(phone)
  // }
  // else {
  //   isNameValid = () => email && VALIDATORS.EMAIL(email)
  // }



  // Events
  const handleClick = async () => {


    // const receivedObject = await fetchPricingObject(Pricing.id);
    // const email = receivedObject.email;

    // const pricingObject = packPricingObject({ ...Pricing, email: Pricing.email, emails: [...Pricing.emails, tempEmail] });
    // await resendPricingState(Pricing.id, pricingObject);
    
    // const tempEmailAction = PRICING_ACTIONS.setTempEmail(Pricing.email);
    // dispatch(tempEmailAction);

    // const pricingObject = packPricingObject(Pricing)
    // putPricingState(id, pricingObject)

  };

  // Computations
  const enabled = isNameValid();

  // Render
  return (
    <div className={clsx("container-fluid", "py-2", styles.container)}>
      <button
        type="button"
        className={clsx(styles.button, enabled ? null : styles.disabled)}
        onClick={handleClick}
      >
        Send Code
      </button>
    </div>
  );
};



export default MoreButton
