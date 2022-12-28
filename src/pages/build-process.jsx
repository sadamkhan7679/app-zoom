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
import GreatApps from "../components/sections/GreatApps/GreatApps";
import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const BuildProcessPage = ({ location }) => {
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

      {/* Read navid warning is custom and put there by developer. */}
      <QuantisedScrollContainer pageId={""}>
        <GreatApps groupIndex={0} hash={location.hash} />
        <FooterQScroll groupIndex={1} hash={location.hash} />
      </QuantisedScrollContainer>
      <QuantisedScrollController hash={location.hash} />
    </>
  );
};

BuildProcessPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default BuildProcessPage;
