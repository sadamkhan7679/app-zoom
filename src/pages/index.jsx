import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/index.css";
import { useSelector } from "react-redux";
import GlobalReach from "../components/sections/GlobalReach/GlobalReach";
import Landing from "../components/sections/Landing/Landing";
import BookingModal from "../components/BookingModal/BookingModal";
import useInnerVh from "../hooks/useInnerVh";
import Header from "../components/Header/Header";
import Head from "../components/Head/Head";
import clearQuantisedScroller from "../hooks/clearQuantisedScroller";
import HeaderPlaceholder from "../components/common/HeaderPlaceholder/HeaderPlaceholder";
import NavPanel from "../components/sections/NavPanel/NavPanel";
import appIcon from "../assets/navPanel/app.svg";
import buildIcon from "../assets/navPanel/build.svg";
import cashIcon from "../assets/navPanel/cash.svg";
import studyIcon from "../assets/navPanel/study.svg";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import TestimonialsComp from "../components/Testimonials/testimonials";
import { test } from "../library/api/pageLoad";
// import settings from "../../test/settings";

const IndexPage = ({ location }) => {
  // Redux
  const { navId } = useSelector((state) => state.QuantisedScroller);
  // Hooks
  console.log("Index PAge");
  clearQuantisedScroller();
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
  // }, []);
  // Render
  return (
    <>
      <Head />
      <Header
        pageId={location.pathname}
        hide={navId === "what-opportunity-do-you-see"}
      />
      <HeaderPlaceholder half />
      <Landing />
      <GlobalReach />
      <TestimonialsComp noButton={true} />
      <NavPanel
        links={[
          {
            to: "/case-study",
            icon: studyIcon,
            text: "Case Study",
          },
          {
            to: "/sample-apps",
            icon: appIcon,
            text: "Sample Apps",
          },
          {
            to: "/build-process",
            icon: buildIcon,
            text: "Build Process",
          },
          // {
          //   to: '/cost-to-make-an-app',
          //   icon: cashIcon,
          //   text: 'Pricing',
          // },
        ]}
      />
      <FreeFooter />
    </>
  );
};

IndexPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default IndexPage;
