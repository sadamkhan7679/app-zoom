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
    // // console.log(process.argv);
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
          <h1 className="section__h1">Copyright 2010-present</h1>
          <p>Contents of this site are copyrighted 2010 to present day.</p>
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
