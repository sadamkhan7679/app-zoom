import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { Link } from 'gatsby'


import putPricingState from '../../../../../../procedures/pricing/putPricingState'
import packPricingObject from '../../../../../../functions/pricing/packPricingObject'
import findFirstNullQuestion from '../../../../../../functions/pricing/findFirstNullQuestion'
import calcFirstlandingPage from '../../../../../../functions/pricing/calcFirstlandingPage'


const MoreButton = (props) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { id, answers, verifyCount, charge } = Pricing;

  // let options  =  Pricing.answers._root.nodes?Pricing.answers._root.nodes[6].entry[1]:null;
  let options = props.answers ? props.answers : null;
  let status = options ? Object.values(options).includes(true) : false;

  const dispatch = useDispatch();


  // Events
  const handleClick = async () => {

    if (Pricing.id) {
      const pricingObject = packPricingObject(Pricing)
      putPricingState(Pricing.id, pricingObject)
    }
  };

  // Render
  return (
    <div className={clsx("container-fluid", "py-2", styles.container)}>
      <Link to={findFirstNullQuestion(answers) === undefined ? `/cost-to-make-an-app/${calcFirstlandingPage(charge, verifyCount)}` : '/cost-to-make-an-app/development'}>
        {/* <Link to={'/cost-to-make-an-app/development'}> */}
        <button
          type="button"
          className={clsx(styles.button, status || (options && options.others !== null && options.others !== false) ? null : styles.disabled)}
          onClick={handleClick}
        >
          Next
        </button>
      </Link>
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
