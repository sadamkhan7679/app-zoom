import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import BookingModal from "../../components/BookingModal/BookingModal";
import HeaderPlaceholder from "../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import FreeFooter from "../../components/common/Footer/FreeFooter/FreeFooter";
import PricingSignUpLayout from "../../layouts/pricing/signUp";
import TestimonialsComp from "../../components/Testimonials/testimonials";
import { test } from "../../library/api/pageLoad";
import settings from "../../library/settings";

// console.log("hello");
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
        <PricingSignUpLayout />
        {/* <TestimonialsComp /> */}
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
