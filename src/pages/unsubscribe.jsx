import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/index.css";
import styles from "../layouts/pricing/question/fundingType/moreForm/moreFormRow/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import useInnerVh from "../hooks/useInnerVh";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import QuestionText from "./../components/pricing/question/questionText";
import HeaderPlaceholder from "../components/common/HeaderPlaceholder/HeaderPlaceholder";
import PRICING_ACTIONS from "../redux/actions/Pricing";
import GreatApps from "../components/sections/GreatApps/GreatApps";
import PRICING_API_URL from "./../constants/pricing/apiUrl";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import putPricingState from "../procedures/pricing/putPricingState";
import packPricingObject from "../functions/pricing/packPricingObject";

import classConcat from "../util/ClassConcat";
import * as axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const BuildProcessPage = ({ location }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { answers } = Pricing;
  const { navId } = useSelector((state) => state.QuantisedScroller);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [unsubscribeFlag, setUnsubscribeFlag] = useState(false);

  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);

  const stringToBolean = (ans) => {
    return ans === "no" ? false : true;
  };

  const updateAnswers = (e) => {
    setUnsubscribeFlag(false);
    const setAnswer = PRICING_ACTIONS.setTsUnsubscribe(0);
    dispatch(setAnswer);
    if (e.target.name === "patent") {
      const setAnswer = PRICING_ACTIONS.setAnswer(
        e.target.name,
        answers.get(e.target.name) === "no" ? "dont-know" : "no"
      );
      dispatch(setAnswer);
    } else {
      const setAnswer = PRICING_ACTIONS.setAnswer(
        e.target.name,
        answers.get(e.target.name) === "yes" ? "no" : "yes"
      );
      dispatch(setAnswer);
    }
  };

  const unsubscribe = () => {
    setUnsubscribeFlag(true);
    const setAnswer = PRICING_ACTIONS.setTsUnsubscribe(Date.now());
    dispatch(setAnswer);
    const setDevelopment = PRICING_ACTIONS.setAnswer("development", "no");
    dispatch(setDevelopment);
    const setFeatures = PRICING_ACTIONS.setAnswer("features", "no");
    dispatch(setFeatures);
    const setFunding = PRICING_ACTIONS.setAnswer("funding", "no");
    dispatch(setFunding);
    const setPatent = PRICING_ACTIONS.setAnswer("patent", "no");
    dispatch(setPatent);
    const setTechnology = PRICING_ACTIONS.setAnswer("technology", "no");
    dispatch(setTechnology);
    const setMarketing = PRICING_ACTIONS.setAnswer("marketing", "no");
    dispatch(setMarketing);
    const setReferral = PRICING_ACTIONS.setAnswer("referral", "no");
    dispatch(setReferral);
  };
  const UpdateData = async () => {
    if (Pricing.id) {
      setLoading(true);
      const pricingObject = packPricingObject(Pricing);
      const response = await putPricingState(Pricing.id, pricingObject);
      setLoading(false);
    }
  };
  useInnerVh();
  // Render
  return (
    <>
      <Head />
      <Header
        pageId={location.pathname}
        hide={navId === "what-opportunity-do-you-see"}
      />
      <article className="article">
        <HeaderPlaceholder half />
        <section className={classConcat("container", "section-container")}>
          <h2>You asked for the following:</h2>
          <div className={styles.container}>
            <div className={styles.input}>
              <input
                type="checkbox"
                id="development"
                name="development"
                checked={stringToBolean(answers.get("development"))}
                onChange={updateAnswers}
              ></input>
              <label>Where are sample documents in app development?</label>
              <br></br>
            </div>

            <div className={styles.input}>
              <input
                type="checkbox"
                id="features"
                name="features"
                checked={stringToBolean(answers.get("features"))}
                onChange={updateAnswers}
              ></input>
              <label>What additional features are typically requested?</label>
              <br></br>
            </div>

            <div className={styles.input}>
              <input
                type="checkbox"
                id="funding"
                name="funding"
                checked={stringToBolean(answers.get("funding"))}
                onChange={updateAnswers}
              ></input>
              <label>How to get funding through OpZoom?</label>
              <br></br>
            </div>

            <div className={styles.input}>
              <input
                type="checkbox"
                id="patent"
                name="patent"
                checked={stringToBolean(answers.get("patent"))}
                onChange={updateAnswers}
              ></input>
              <label>How to get a patent?</label>
              <br></br>
            </div>

            <div className={styles.input}>
              <input
                type="checkbox"
                id="technology"
                name="technology"
                checked={stringToBolean(answers.get("technology"))}
                onChange={updateAnswers}
              ></input>
              <label>Where are the case studies?</label>
              <br></br>
            </div>

            <div className={styles.input}>
              <input
                type="checkbox"
                id="referral"
                name="referral"
                checked={stringToBolean(answers.get("referral"))}
                onChange={updateAnswers}
              ></input>
              <label>How to become a referral partner?</label>
              <br></br>
            </div>

            <div className={styles.input}>
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={stringToBolean(answers.get("marketing"))}
                onChange={updateAnswers}
              ></input>
              <label>How to market and sell apps?</label>
              <br></br>
            </div>
          </div>
          <br></br>
          <br></br>
          <h2>Do you want to unsubscribe from all future messages?</h2>
          <div className={styles.container}>
            <div className={styles.input}>
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={unsubscribeFlag}
                onChange={unsubscribe}
              ></input>
              <label>Unsubscribe from all</label>
              <br></br>
            </div>
            <div className={styles.container}>
              <center>
                <button type="button" className="button" onClick={UpdateData}>
                  {loading ? (
                    <Spinner animation="border" role="status" color={"white"} />
                  ) : (
                    "Update"
                  )}
                </button>
              </center>
            </div>
          </div>
        </section>
      </article>
      <FreeFooter />
    </>
  );
};

BuildProcessPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default BuildProcessPage;
