import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import HeaderPlaceholder from "../components/common/HeaderPlaceholder/HeaderPlaceholder";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import useInnerVh from "../hooks/useInnerVh";
import classConcat from "../util/ClassConcat";
import { test } from "../library/api/pageLoad";
import settings from "../library/settings";
const CopyrightPage = ({ location }) => {
  // Hooks
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
      <Header pageId={location.pathname} />
      <article className="article">
        <HeaderPlaceholder half />
        <section className={classConcat("container", "section-container")}>
          <h1 className="section__h1">Terms of Service</h1>
          <p>
            <b>Goals</b> OpZoom works towards the goals set in the
            specifications defined by the client. We are bound by the specific
            agreement with clients.
          </p>
          <p>
            <b>Services provided</b> OpZoom provides a variety of services
            ranging from software development, maintaining resources required to
            provide the user experience needed.
          </p>
          <p>
            <b>Privacy and Secrecy</b> OpZoom realizes that the customer data is
            valuable, private and secret. All necessary steps to maintain the
            secrecy of private data are taken by the firm.
          </p>
        </section>
      </article>
      <FreeFooter />
    </>
  );
};

CopyrightPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default CopyrightPage;
