import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navigate } from "@reach/router";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { Link } from 'gatsby'


import putPricingState from '../../../../../procedures/pricing/putPricingState'
import packPricingObject from '../../../../../functions/pricing/packPricingObject'


const MoreButton = (props) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { answers, hasSignedUp, linkCount, id } = useSelector((state) => state.Pricing)
  // let options  =  Pricing.answers._root?Pricing.answers._root.nodes?Pricing.answers._root.nodes[0].entry[1]:null:null;
  let options = props.answers ? props.answers : null;
  let status = options ? Object.values(options).includes(true) : false;

  // options = Pricing.answers._root?Pricing.answers._root.entries?Pricing.answers._root.entries[0]?Pricing.answers._root.entries[0][1]:null:null:null;
  // status = status || options ? Object.values(options).includes(true) : false ;

  const dispatch = useDispatch();

  // Functions

  // Events
  const handleClick = async () => {
    if (linkCount > 0 && Pricing.id) {
      const pricingObject = packPricingObject(Pricing)
      putPricingState(Pricing.id, pricingObject)
    }
  };



  // Computations
  // const enabled = isNameValid();

  // Render
  return (
    <div className={clsx("container-fluid", "py-2", styles.container)}>
      <Link to={'/cost-to-make-an-app/login'}>
        <button
          type="button"
          className={clsx(styles.button, status ? null : styles.disabled)}
          onClick={handleClick}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

MoreButton.propTypes = {
  // question: PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   answerIds: PropTypes.object.isRequired,
  // }).isRequired,
}

export default MoreButton
