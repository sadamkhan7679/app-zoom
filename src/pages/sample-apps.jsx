import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/index.css";
import { useSelector } from "react-redux";
import useInnerVh from "../hooks/useInnerVh";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import QuantisedScrollContainer from "../components/QuantisedScrollContainer/QuantisedScrollContainer";
import FooterQScroll from "../components/sections/FooterQScroll/Footer";
import QuantisedScrollController from "../components/QuantisedScrollController/QuantisedScrollController";
import PopularApps from "../components/sections/PopularApps/PopularApps";
import BookingModal from "../components/BookingModal/BookingModal";
import BookingEmbed from "../components/BookingEmbed/BookingEmbed";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const SampleAppsPage = ({ location }) => {
  // Hooks
  const { navId } = useSelector((state) => state.QuantisedScroller);
  useInnerVh();
  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);
  // Render
  return (
    <>
      <Head />
      <Header
        pageId={location.pathname}
        hide={navId === "what-opportunity-do-you-see"}
      />
      {/* <QuantisedScrollContainer> */}
      <PopularApps groupIndex={0} hash={location.hash} />
      {/* <FooterQScroll
          groupIndex={1}
          hash={location.hash}
        /> */}
      {/* </QuantisedScrollContainer>
      <QuantisedScrollController hash={location.hash} /> */}
      <FreeFooter />
    </>
  );
};

SampleAppsPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default SampleAppsPage;
