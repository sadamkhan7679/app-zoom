import React from "react";
import "../styles/index.css";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import TestimonialsComp from "../components/Testimonials/testimonials";
import EstimateBar from "../components/pricing/estimate/estimateBar";
import classConcat from "../util/ClassConcat";
import QuestionNumber from "../components/pricing/question/questionNumber";

const Testimonials = ({ location }) => {
  return (
    <div className="testimonial-main">
      <Head />
      <Header pageId={location.pathname} />
      <div
        style={{
          paddingTop: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <EstimateBar />
        <div style={{ marginTop: "40px" }}>
          <QuestionNumber index={11} count={11} />
        </div>
      </div>
      <div className={classConcat("container")}>
        <h4 className="section__h1">Clients Return Often</h4>
        <p className="section__p" style={{ lineHeight: "25px" }}>
          Our mission is to speed up innovation by encouraging startups and grow
          as our clients succeed.
          <br />
          To achieve our goals we keep prices low and focus on speed to market.
          <br />
          So we spend more time doing good work than talking about it.
          <br />
          Here are a few video interviews that explain how clients think about
          their experience with us.
          <br />
        </p>

        {/* <p className="section__p">
          Companies use the marketing technology to get in front of a lot of
          users quickly.
        </p> */}
      </div>
      <TestimonialsComp noButton={false} />
    </div>
  );
};

export default Testimonials;
