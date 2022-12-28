/* eslint-disable no-console */
import * as axios from "axios";

import API_URL from "../../../constants/pricing/apiUrl";

// Retrieves pricing state as object from back-end using pricing ID.
const fetchPricingObject = async (id, mesg) => {
  // Perform fetch.
  // const requestUrl = new URL(`/${id}`, API_URL).href;
  const requestUrl = API_URL + `/price/${id}/${mesg}`;

  try {
    const response = await axios({
      method: "get",
      url: requestUrl,
    });

    // let answersTemp = {
    //   platforms: {
    //     web: false,
    //     ios: false,
    //     android: false,
    //   },
    //   downpayment: null,
    //   marketing: null,
    //   patent: null,
    //   login: null,
    //   technology: null,
    //   context: null,
    //   signupGreeting: null,
    //   fundingType: null,
    //   development: null,
    //   features: null,
    //   funding: null,
    //   design: null,
    //   "level-of-detail": null,
    // };

    // if (!response.data.config) {
    //   response.data.config = {
    //     answersTemp,
    //     estimate: null,
    //     optionalInfo: {},
    //     linkCount: null,
    //     emails: null,
    //   };
    // } else {
    //   let newAnswers = {
    //     ...answersTemp,
    //     ...response.data.config.answers,
    //   };
    //   response.data.config.answers = newAnswers;
    //   response.data.config = {
    //     estimate: null,
    //     optionalInfo: {},
    //     linkCount: null,
    //     emails: null,
    //     ...response.data.config,
    //   };
    // }
    if (!response.data.data.config || typeof response.data.data.config === 'string') {
      response.data.data.config = {
        answers: {},
        optionalInfo: {},
      }
    }
    const {
      name,
      charge,
      verifyCount,
      tsUnsubscribe,
      monthlyFee,
      message,
      amount,
      email,
      phone,
      clid,
      id,
      config: { answers, estimate, optionalInfo, linkCount, emails },
    } = response.data.data;
    const { patch } = response.data;

    const pricingObject = {
      name,
      charge,
      verifyCount,
      tsUnsubscribe,
      monthlyFee,
      message,
      amount,
      email,
      phone,
      clid,
      patch,
      config: { answers, estimate, optionalInfo, linkCount: linkCount },
      emails,
      id,
    };
    return pricingObject;
  } catch (err) {
    console.error(err.message);
    console.error("Failed to fetch pricing state.");
    return null;
  }
};

export default fetchPricingObject;
