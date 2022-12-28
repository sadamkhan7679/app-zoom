import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { navigate } from "@reach/router";
import * as Cookies from "js-cookie";
import styles from "./styles.module.css";
import VALIDATORS from "../../../../util/validators";
import PRICING_ACTIONS from "../../../../redux/actions/Pricing";
import resendPricingState from "../../../../procedures/pricing/resendPricingState";
import putPricingState from "../../../../procedures/pricing/putPricingState";
import fetchPricingObject from "../../../../functions/pricing/fetchPricingObject";


import packPricingObject from "../../../../functions/pricing/packPricingObject";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const SignUpButton = ({ question }) => {
  // Hooks
  const Pricing = useSelector((state) => state.Pricing);
  const { email, id, tempEmail } = Pricing;
  const dispatch = useDispatch();

  useEffect(() => {
    const setAnswer = PRICING_ACTIONS.setAnswer(question.id, 'updated');
    dispatch(setAnswer);
  }, [])

  // Functions
  const isSignUpValid = () => email && VALIDATORS.EMAIL(email);

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

    Swal.fire(
      'success',
      'Email Resent',
      'success'
    )
      .then(async () => {

        // Update sign up state.

        // console.log(process.env.BUILD_ENV)

        const signUp = PRICING_ACTIONS.signUp();
        dispatch(signUp);

        // fireConversion()

        // Create record on database.

        // const receivedObject = await fetchPricingObject(Pricing.id);
        // const email = receivedObject.email;

        const pricingObject = packPricingObject({ ...Pricing, email: Pricing.email, emails: [...Pricing.emails, tempEmail] });
        await resendPricingState(Pricing.id, pricingObject);

        const tempEmailAction = PRICING_ACTIONS.setTempEmail(Pricing.email);
        dispatch(tempEmailAction);

        if (!id) {
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
      })
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
        Resend
      </button>
    </div>
  );
};


SignUpButton.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
}
SignUpButton.defaultProps = {
  question: null
}

export default SignUpButton;
