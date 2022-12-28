import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navigate } from "gatsby";
import * as Cookies from "js-cookie";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../../util/validators";
import PRICING_ACTIONS from "../../../../../redux/actions/Pricing";
import postPricingState from "../../../../../procedures/pricing/postPricingState";
import packPricingObject from "../../../../../functions/pricing/packPricingObject";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpButton = () => {
  // Hooks
  const [loading, setLoading] = useState(false);
  const Pricing = useSelector((state) => state.Pricing);
  const { email, name } = Pricing;
  const dispatch = useDispatch();

  // Functions
  const isSignUpValid = () =>
    email && VALIDATORS.EMAIL(email) && VALIDATORS.NAME(name);

  // Procedures
  /*
  const fireConversion = () => {
    if (!window || !window.gtag) {
      // eslint-disable-next-line no-console
      console.log('No gtag function found.')
      return
    }
    // eslint-disable-next-line no-console
    console.log('Firing GA Conversion Event.')
    window.gtag('event', 'conversion', {
      send_to: 'AW-480677404/S619CLm1sOoBEJycmuUB',
      value: 1.0,
      currency: 'USD',
      event_callback: () => {
      // eslint-disable-next-line no-console
        console.log('GA Conversion Event Recorded.')
      },
    })
  }
  */

  // Events
  const handleClick = async () => {
    // Update sign up state.
    setLoading(true);
    const signUp = PRICING_ACTIONS.signUp();
    dispatch(signUp);

    // fireConversion()

    // Create record on database.
    const server = window.location.origin;
    const pricingObject = packPricingObject({ ...Pricing, server });
    const id = await postPricingState(pricingObject);
    if(id) {
        document.cookie = `uid=${id}`;
        const setId = PRICING_ACTIONS.setId(id);
        dispatch(setId);
    }
    const tempEmailAction = PRICING_ACTIONS.setTempEmail(email);
    dispatch(tempEmailAction);

    if (!id) {
      setLoading(false);
      return;
    }

    Cookies.set(
      "opz-pricing-id",
      { id },
      {
        sameSite: true,
      }
    );

    navigate("/cost-to-make-an-app/signupGreeting");
  };

  // Computations
  const enabled = isSignUpValid();

  // Render
  return (
    <div className={clsx("container-fluid", "py-2", styles.container)}>
      <button
        type="button"
        className={clsx(styles.button, enabled ? null : styles.disabled)}
        onClick={handleClick}
      >
        {loading ? (
          <Spinner animation="border" role="status" color={"white"} />
        ) : (
          "Send"
        )}
      </button>
    </div>
  );
};

export default SignUpButton;
