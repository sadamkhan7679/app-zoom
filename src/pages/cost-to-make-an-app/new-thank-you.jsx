import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import BookingModal from "../../components/BookingModal/BookingModal";
import HeaderPlaceholder from "../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import FreeFooter from "../../components/common/Footer/FreeFooter/FreeFooter";
import PricingNewThankYouLayout from "../../layouts/pricing/question/newThankYou";
import PricingEstimateLayout from "../../layouts/pricing/estimate";
import putPricingState from "../../procedures/pricing/putPricingState";
import packPricingObject from "../../functions/pricing/packPricingObject";
import { useSelector } from "react-redux";

const PricingSignUpPage = ({ location }) => {
  const Pricing = useSelector((state) => state.Pricing);
  if (Pricing.id) {
    const pricingObject = packPricingObject(Pricing);
    putPricingState(Pricing.id, pricingObject);
  }
  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);

  return (
    <>
      <Head />
      <Header pageId={location.pathname} />
      <section className="full-section">
        <HeaderPlaceholder />
        <PricingNewThankYouLayout
          PricingEstimateLayout={PricingEstimateLayout}
        />
      </section>
    </>
  );
};

PricingSignUpPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default PricingSignUpPage;
