import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import BookingModal from "../../components/BookingModal/BookingModal";
import HeaderPlaceholder from "../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import FreeFooter from "../../components/common/Footer/FreeFooter/FreeFooter";
import PricingMoreLayout from "../../layouts/pricing/question/more";
import PricingEstimateLayout from "../../layouts/pricing/estimate";
import { useSelector } from "react-redux";
import { navigate } from "gatsby";
import { test } from "../../library/api/pageLoad";
import settings from "../../library/settings";

const PricingSignUpPage = ({ location }) => {
  const state = useSelector((state) => state.Pricing);
  console.log("state", state)

  useEffect(() => {
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
    const routeHistory = localStorage.getItem("moreRoute")
    const mesg = localStorage.getItem("mesg")

    if (state.verifyCount>0 && mesg === "quote") {
      console.log("state", state)

      navigate("/cost-to-make-an-app/new-thank-you/");
    } else {
      navigate("/cost-to-make-an-app/more")
    }
    // else {
    //   //routeHistory ? navigate(routeHistory): navigate("/cost-to-make-an-app/more")
    // }

  }, []);

  return (
    <>
      <Head />
      <Header pageId={location.pathname} />
      <section className="full-section">
        <HeaderPlaceholder />
        <PricingMoreLayout PricingEstimateLayout={PricingEstimateLayout} section={1} route={location.pathname} />
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
