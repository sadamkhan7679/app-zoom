import React from "react";
import { useDispatch, useSelector } from "react-redux";
import path from "path";
import { navigate } from "gatsby";
import { useEffect } from "react";
import { useLocation } from "@reach/router";
import { Map } from "immutable";
import * as Cookies from "js-cookie";
import findFirstNullQuestion from "../../functions/pricing/findFirstNullQuestion";
import parsePricingId from "../../functions/pricing/parsePricingId";
import PRICING_ACTIONS from "../../redux/actions/Pricing";
import fetchPricingObject from "../../functions/pricing/fetchPricingObject";
import useClidParser from "../../hooks/pricing/useClidParser";
import QUESTIONS from "../../constants/pricing/questions";
import EstimateText from "../../components/pricing/estimate/estimateText";
import parsePricingMesg from "../../functions/pricing/parsePricingMesg/parsePricingMesg";
import parsePricingPage from "../../functions/pricing/parsePricingPage";
import Spinner from "react-bootstrap/Spinner";

// This layout simply redirects.

const unpackAnswers = (receivedAnswers) => {
  const questionIds = Object.keys(receivedAnswers);

  const answerEntries = questionIds.map((questionId) => {
    const receivedAnswer = receivedAnswers[questionId];

    return [questionId, receivedAnswer];
  });

  const filteredAnswerEntries = answerEntries.filter(
    ([questionId, receivedAnswer]) => {
      // Ensure question exists.
      if (questionId === "platforms") return true;

      const question = QUESTIONS.find(({ id }) => id === questionId);
      if (!question) return false;

      // Ensure answer exists.
      const possibleAnswers = Object.values(question.answerIds);
      if (!possibleAnswers.includes(receivedAnswer)) return false;

      return true;
    }
  );

  const answers = Map(filteredAnswerEntries);
  return answers;
};

const PricingLayout = () => {
  const Pricing = useSelector((state) => state.Pricing);
  console.log(">>>>index.js>>>", Pricing);
  const { answers, hasSignedUp, linkCount } = Pricing;

  const dispatch = useDispatch();
  const location = useLocation();
  useClidParser();

  // Perform re-direct.
  useEffect(() => {
    (async () => {
      // Parse Link ID.
      const id = parsePricingId(location);
      const mesg = parsePricingMesg(location)
        ? parsePricingMesg(location)
        : "get";
      const page = parsePricingPage(location);
      mesg && localStorage.setItem("mesg", mesg)
      setTimeout(async function () {
        if (id) {
          // Set ID Cookie
          Cookies.set("opz-pricing-id", { id }, { sameSite: true });

          // Fetch state.
          const receivedObject = await fetchPricingObject(id, mesg);
          if (!receivedObject) return;

          // Dispatch receive state action.
          const receiveStateAction =
            PRICING_ACTIONS.receiveObject(receivedObject);
          dispatch(receiveStateAction);

          const tempEmailAction = PRICING_ACTIONS.setTempEmail(
            receivedObject.email
          );
          dispatch(tempEmailAction);

          // Dispatch link count increment action.

          const linkIncrAction = PRICING_ACTIONS.incrLinkCount();
          dispatch(linkIncrAction);

          const answers2 = unpackAnswers(receivedObject.config.answers);
          const firstNullQuestion = findFirstNullQuestion(answers2);
          // debugger;
          console.log("firstNullQuestion",firstNullQuestion)
          if (page) {
            let to;
            switch (page) {
              case "billing":
                to = path.join("/billing");
                navigate(to);
                break;
              case "testimonials":
                to = path.join("/testimonials");
                navigate(to);
                break;
              case "unsubscribe":
                to = path.join("/unsubscribe");
                navigate(to);
                break;
            }
          } else if (firstNullQuestion !== undefined) {
            const to = path.join("/cost-to-make-an-app", firstNullQuestion.id);
            navigate(to);
          } else if (
            receivedObject.charge === null ||
            receivedObject.charge === undefined
          ) {
            const to = path.join("/cost-to-make-an-app", "more");
            navigate(to);
          } else if (receivedObject.verifyCount > 0) {
            const to = path.join("/cost-to-make-an-app", "thank-you");
            navigate(to);
          } else {
            const to = path.join("/cost-to-make-an-app", "estimate");
            navigate(to);
          }
          return;
        }

        const firstNullQuestion = findFirstNullQuestion(answers);

        console.log("quest", firstNullQuestion)

        if (firstNullQuestion !== undefined) {
          if (firstNullQuestion.id === "signupGreeting" && !hasSignedUp) {
            const to = path.join("/cost-to-make-an-app", "sign-up");
            navigate(to);
            return;
          }
          const to = path.join("/cost-to-make-an-app", firstNullQuestion.id);
          navigate(to);
        } else if (!Pricing.id) {
          const to = path.join("/cost-to-make-an-app", "signupGreeting");
          navigate(to);
        } else if (Pricing.charge === null || Pricing.charge === undefined) {
          const to = path.join("/cost-to-make-an-app", "more");
          navigate(to);
        } else if (Pricing.verifyCount > 0) {
          const to = path.join("/cost-to-make-an-app", "thank-you");
          navigate(to);
        } else {
          const to = path.join("/cost-to-make-an-app", "estimate");
          navigate(to);
        }
      }, 0);
    })();
  }, []);

  return (
    <>
      <EstimateText heading="loading please wait" />;
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Spinner animation="border" role="status" color={"white"} />
      </div>
    </>
  );
};

export default PricingLayout;
