import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import EstimateText from "../../../../components/pricing/estimate/estimateText";
import EstimateValue from "../../../../components/pricing/estimate/estimateValue";
import EstimateBreakdown from "../../../../components/pricing/estimate/estimateBreakdown"
import GoBack from "../../../../components/pricing/goBack";
import useClidParser from "../../../../hooks/pricing/useClidParser";
import MoreForm from "./moreForm";
import MoreText from "./moreText";
import MoreForm2 from "./moreForm2";


const PricingThankYouLayout = ({ index, question, prevQuestion, }) => {
    const Pricing = useSelector((state) => state.Pricing);
    const { answers, email, phone } = Pricing;
  useClidParser();
  return (
    <>
      <EstimateText heading="Your Estimate" />
      <EstimateValue />
      {/* <EstimateBar /> */}
      <EstimateBreakdown />
      <center>
      <div className="container">
                <p className="section__p">
                   To verify your phone number, we will send a text message.
                </p>
                <p className="section__p">
                  Where should we send a verification code?
                </p>
       </div>
        <MoreForm email={phone} phone={true} question={question} />
      </center>
      <GoBack prevQuestionId="more" />
    </>
  );
};

PricingThankYouLayout.defaultProps = {
  prevQuestion: null,
}

export default PricingThankYouLayout
