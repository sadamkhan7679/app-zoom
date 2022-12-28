import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import path from "path";
import { navigate } from "gatsby";
import GoBack from "../../../components/pricing/goBack";
import SignUpForm from "../../../components/pricing/signUp/signUpForm";
import SignUpText from "../../../components/pricing/signUp/signUpText";
import findFirstNullQuestion from "../../../functions/pricing/findFirstNullQuestion";
import QUESTIONS from "../../../constants/pricing/questions";
import useClidParser from "../../../hooks/pricing/useClidParser";
import HeaderPlaceholder from "../../../components/common/HeaderPlaceholder/HeaderPlaceholder";
import classConcat from "../../../util/ClassConcat";
import styles from "../question/fundingType/moreForm/moreFormRow/styles.module.css";
import styles2 from "../../../components/contactUs/styles.module.css";
import Spinner from "react-bootstrap/Spinner";
import PRICING_ACTIONS from "../../../redux/actions/Pricing";
import packPricingObject from "../../../functions/pricing/packPricingObject";
import putPricingState from "../../../procedures/pricing/putPricingState";
import useInnerVh from "../../../hooks/useInnerVh";
import clsx from "clsx";

const SignUpLayout = () => {
  const { answers, hasSignedUp } = useSelector((state) => state.Pricing);
  const Pricing = useSelector((state) => state.Pricing);

  useClidParser();

  const prevQuestionId = QUESTIONS[QUESTIONS.length - 2].id;

  const dispatch = useDispatch();

  useInnerVh();

  return (
    <>
      <SignUpText heading="The Quote">
        <h2 className="section__h2">Your estimate is ready.</h2>

        <div className={clsx(styles2.mycontainer2)}>
          <h3 className="section__h2">Get a shareable & editable link:</h3>
          Let's enable you to :
          <ul style={{ marginBottom: "12pt" }}>
            <li>share the estimate with your teammates,</li>
            <li>return to update cost assumptions in your estimate, and</li>
            <li>get a detailed cost break down and samples.</li>
          </ul>
          <p>
            The custom estimate will be sent <b>instantly</b> to your email.
          </p>
        </div>
      </SignUpText>

      <div style={{ marginTop: "40px" }}>
        <h3 className="container section__h2">
          Where should we send your estimate?
        </h3>
        <SignUpForm />
      </div>

      {/* <article className="article container">
        <HeaderPlaceholder half />
        <section className="section__h2">
          <h3 className="text-left">
            Free optional information/training available:
          </h3>
          You can have these answers over a few weeks in bite sized emails.
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
          <h3 className="text-left">STOP educational emails.</h3>
          <div className={styles.container}>
            <div className={styles.input}>
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={unsubscribeFlag}
                onChange={unsubscribe}
              ></input>
              <label>Don't sent any educational emails</label>
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
      </article> */}

      <GoBack prevQuestionId={prevQuestionId} fromPage="sign-up" />
    </>
  );
};

export default SignUpLayout;
