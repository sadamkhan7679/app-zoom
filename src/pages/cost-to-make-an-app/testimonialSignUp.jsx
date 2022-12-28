import React, { useEffect } from "react";
import "../../styles/index.css";
import useInnerVh from "../../hooks/useInnerVh";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import FreeFooter from "../../components/common/Footer/FreeFooter/FreeFooter";
import TestimonialsComp from "../../components/Testimonials/testimonials";
import { test } from "../../library/api/pageLoad";
import settings from "../../library/settings";

const Testimonials = ({ location }) => {
  useInnerVh();
  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);

  return (
    <div className="testimonial-main">
      <Head />
      <Header pageId={location.pathname} />
      <TestimonialsComp />
      <FreeFooter />
    </div>
  );
};

export default Testimonials;
