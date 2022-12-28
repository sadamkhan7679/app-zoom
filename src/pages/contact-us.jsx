import React, { useEffect } from "react";
import "../styles/index.css";
import useInnerVh from "../hooks/useInnerVh";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import classConcat from "../util/ClassConcat";
import ContactUs from "../components/contactUs";
import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const ThankYou = ({ location }) => {
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
      <section className="full-section">
        <div
          className={classConcat("container")}
          style={{ marginTop: "120px" }}
        >
          <h2 className="section__h1">Contact Us</h2>
          <center>
            <h4>Learn Fast by Consulting an Expert</h4>
            <p>Address: 4532 Maycrest Ave, Los Angeles, CA</p>
            <ContactUs></ContactUs>
          </center>
        </div>
      </section>
      <FreeFooter />
    </>
  );
};

export default ThankYou;
