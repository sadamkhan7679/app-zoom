import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/index.css";
import { useSelector } from "react-redux";
import useInnerVh from "../hooks/useInnerVh";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";

import QuantisedScrollContainer from "../components/QuantisedScrollContainer/QuantisedScrollContainer";
import caseStudyImg1 from "../assets/caseStudy/caseStudy1.png";
import caseStudyImg2 from "../assets/caseStudy/caseStudy2.png";
import caseStudyImg3 from "../assets/caseStudy/caseStudy3.png";
import caseStudyImg4 from "../assets/caseStudy/caseStudy4.png";
import FooterQScroll from "../components/sections/FooterQScroll/Footer";
import CaseStudy from "../components/sections/CaseStudy/CaseStudy";
import QuantisedScrollController from "../components/QuantisedScrollController/QuantisedScrollController";
import BookingModal from "../components/BookingModal/BookingModal";

import BookingEmbed from "../components/BookingEmbed/BookingEmbed";
import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const CaseStudyPage = ({ location }) => {
  const { navId } = useSelector((state) => state.QuantisedScroller);
  useInnerVh();
  // useEffect(() => {
  //   let uid = document.cookie
  //     .split(";")
  //     .find((cookies) => cookies.includes(" uid"));

  //   test({
  //     stage: process.argv[2],
  //     // stage: settings.test,
  //     uid: uid ? uid.split("=")[1] : null,
  //     url: window.location.href,
  //   });

  //   // console.log(uid);
  // }, []);
  // Render
  return (
    <>
      <Head />
      <Header
        pageId={location.pathname}
        hide={navId === "what-opportunity-do-you-see"}
      />
      {/* <QuantisedScrollContainer> */}
      <CaseStudy
        groupIndex={0}
        hash={location.hash}
        imgUrl={caseStudyImg1}
        imgOrder={0}
        textOrder={0}
        heading="Find a Problem"
        paragraphs={[
          <>Look for a problem to be solved.</>,
          <>
            The client found a lot of people who want a place to post their
            work.
          </>,
        ]}
        textBias={-1}
        withHeader
      />
      <CaseStudy
        groupIndex={0}
        hash={location.hash}
        imgUrl={caseStudyImg2}
        imgOrder={0}
        textOrder={0}
        heading="Create a great design"
        paragraphs={[
          <>Reduces development costs with lower change orders.</>,
          <>Familiar user experience.</>,
          <>Exciting to keep user attention.</>,
          <>Useful to keep them returning. </>,
          <>Social references to help connections grow.</>,
        ]}
        textBias={-2}
      />
      <CaseStudy
        groupIndex={0}
        hash={location.hash}
        imgUrl={caseStudyImg3}
        imgOrder={0}
        textOrder={0}
        textBias={0}
        heading="Develop to design specifications quickly"
        paragraphs={[
          <>Picked a versatile platform: Flutter.</>,
          <>Great development team.</>,
        ]}
      />
      <CaseStudy
        groupIndex={0}
        hash={location.hash}
        imgUrl={caseStudyImg4}
        imgOrder={0}
        textOrder={0}
        heading="The Result"
        paragraphs={[
          <>An attractive user friendly app.</>,
          <>What do you want to build?</>,
        ]}
        textBias={0}
      />
      {/* <FooterQScroll
          groupIndex={0}
          hash={location.hash}
        /> */}
      {/* </QuantisedScrollContainer>
      <QuantisedScrollController hash={location.hash} /> */}
      <FreeFooter />
    </>
  );
};

CaseStudyPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default CaseStudyPage;
