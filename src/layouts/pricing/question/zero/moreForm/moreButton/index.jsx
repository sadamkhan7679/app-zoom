import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navigate } from "@reach/router";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../../../util/validators";
// import PRICING_ACTIONS from '../../../../../redux/actions/Pricing'
import PropTypes from "prop-types";


import putPricingState from '../../../../../../procedures/pricing/putPricingState'
import packPricingObject from '../../../../../../functions/pricing/packPricingObject'

const MoreButton = ({
  question
}) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { email, id } = Pricing;
  const dispatch = useDispatch();

  // Functions
  const isNameValid = () => email && VALIDATORS.EMAIL(email);

  // Events
  const handleClick = async () => {
    if(Pricing.id){
      const pricingObject = packPricingObject(Pricing)
      putPricingState(Pricing.id, pricingObject)
    }
    
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
        Update
      </button>
    </div>
  );
};

MoreButton.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
}

export default MoreButton
