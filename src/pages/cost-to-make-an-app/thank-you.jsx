import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import BookingModal from "../../components/BookingModal/BookingModal";
import HeaderPlaceholder from "../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import FreeFooter from "../../components/common/Footer/FreeFooter/FreeFooter";
import PricingThankYouLayout from "../../layouts/pricing/question/thankYou";
import PricingEstimateLayout from "../../layouts/pricing/estimate";
import { test } from "../../library/api/pageLoad";
import settings from "../../library/settings";

const PricingSignUpPage = ({ location }) => {
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
        <PricingThankYouLayout PricingEstimateLayout={PricingEstimateLayout} />
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
