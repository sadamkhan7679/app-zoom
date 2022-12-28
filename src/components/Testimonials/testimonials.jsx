import React, { useState, useEffect, useRef } from "react";
import "../../styles/index.css";
import classConcat from "../../util/ClassConcat";
import "./testimonials.css";
import axios from "axios";
import { navigate, Link } from "gatsby";
import styles from "../../components/pricing/goBack/styles.module.css";
import styles2 from "../../components/pricing/question/questionOptionGroup/questionOption/questionOptionInfo/styles.module.css";
import { FaPlay, FaPause } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordian from "./accordian";

import logo from "../../assets/logo.png";

const Testimonials = ({ location, noButton }) => {
  const [Data, setData] = useState([{cover: "why.clients.refer.opzoom.png",
  text: "Learn what makes people talk about OpZoom.",
  title: "Why clients refer opzoom to others.",
  video: "why.clients.refer.opzoom.m4v",
  }]);

  useEffect(() => {
    try {
      fetch(
        "https://media.opzoom.com/app.opzoom.com/testimonials/config.json",
        { method: "GET", headers: {} }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res.data);
          console.log(">>>>>>>",res)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  return (
    <div className="testimonial-main">
      <section className="full-section">
        <div
          className={classConcat("container")}
          style={{ marginTop: "120px" }}
        >
          <div className="accordian_wrapper">
            {noButton && <h2 style={{margin: "10px"}}>Video Testimonials</h2>}
            {Data && Data.map((item,index)=>
              <Accordian {...item}></Accordian>
            )}
          </div>
          <div className="Buttons">
            <Link
              to={`/cost-to-make-an-app/marketing`}
              className={styles.goBack}
            >
              ←&nbsp;&nbsp;Back&nbsp;
            </Link>

            <Link to={"/cost-to-make-an-app/sign-up"}>
              <button type="button" className={styles2.button}>
                <span className={styles2.next}>Next</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
