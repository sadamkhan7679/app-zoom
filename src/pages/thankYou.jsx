import React, { useEffect } from "react";
import "../styles/index.css";
import styles from "../layouts/pricing/question/fundingType/moreForm/moreFormRow/styles.module.css";
import useInnerVh from "../hooks/useInnerVh";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import classConcat from "../util/ClassConcat";

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
          <h2 className="section__h1">Thank You</h2>
          <center>
            <h5>
              Your monthly subscription supports the effort required to keep
              your app current.
            </h5>
          </center>
        </div>
      </section>
      <FreeFooter />
    </>
  );
};

export default ThankYou;
