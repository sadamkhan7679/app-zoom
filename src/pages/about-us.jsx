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
    // console.log(settings);
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
          <h1 className="section__h1">About Us</h1>
          <p>
            <b>Experience</b> OpZoom has extensive experience building software
            including apps, websites and data management applications.
          </p>
          <p>
            <b>Locations</b> We have locations worldwide including the US and
            UK.
          </p>
          <p>
            <b>Team</b> We have 52 experienced developers in our team
            specializing in web and mobile (iOS and Android) applications and
            complimentary specialities including business analytics, machine
            learning and API integrations.
          </p>
          <p>
            <b>Goals</b> Our aim is to be the technology partner so you
            don&apos;t have to worry about technology.
          </p>
          <p>
            <b>Customers</b> Our customers include:
          </p>
          <ul>
            <li>
              companies that want to improve their technology capabilities.
            </li>
            <li>Startups working on products with a technology component.</li>
            <li>
              Individuals or consultants wanting to create products that scale
            </li>
          </ul>
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
