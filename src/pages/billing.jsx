import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { navigate } from "@reach/router";
import StripeCheckout from "react-stripe-checkout";
import "../styles/index.css";
import styles from "../layouts/pricing/question/fundingType/moreForm/moreFormRow/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import useInnerVh from "../hooks/useInnerVh";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import FreeFooter from "../components/common/Footer/FreeFooter/FreeFooter";
import classConcat from "../util/ClassConcat";
import * as axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import PRICING_API_URL from "../constants/pricing/apiUrl";
import packPricingObject from "../functions/pricing/packPricingObject";

import { test } from "../library/api/pageLoad";
import settings from "../library/settings";

const BillingPage = ({ location }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const { email, monthlyFee } = Pricing;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [publicKey, setPublicKey] = useState(false);

  useEffect(() => {
    // console.log(process.argv);
    // test({
    //   env: settings[process.argv && process.argv[2]],
    //   uid: process.argv && process.argv[3],
    // });
  }, []);

  const fetchPK = () => {
    axios
      .get(`${PRICING_API_URL}/stripe/public_key`, {})
      .then(function (response) {
        setPublicKey(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  fetchPK();
  const Charge = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: PRICING_API_URL + "/stripe/monthly/" + Pricing.id,
        data: data,
      });
      navigate("/thankYou/");
    } catch (error) {
      Swal.fire("Sorry", error.response.data.split(".")[0], "error").then(
        async () => {}
      );
      setLoading(false);
      console.error("Failed to update.");
    }
  };

  const onToken = (token, address) => {
    let data = packPricingObject(Pricing);
    data.source = token.id;
    setLoading(true);
    Charge(data);
  };

  const showAlert = () => {
    Swal.fire(
      "To Proceed",
      "We need your agreement to our conditions",
      "warning"
    ).then(async () => {});
  };

  const hanldeChange = () => {
    setAgree(!agree);
  };
  useInnerVh();
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
          <h4 className="section__h1">App Maintenance Subscription</h4>
          <b>Benefits</b>
          <ul>
            <li>Keep the app current on app stores</li>
            <li>Backup restore capability</li>
          </ul>
          <div className={styles.container}>
            <div className={styles.input}>
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={agree}
                onChange={hanldeChange}
              ></input>
              <label>
                <>Agree to the conditions of support</>
                <a href="https://file.opzoom.com/ContractTerms.pdf"> [Here]</a>
              </label>
              <br></br>
            </div>
            <div className={styles.container}>
              <center>
                <h3>{!monthlyFee ? "$19" : `$${monthlyFee / 100}`}/month</h3>
                {publicKey && agree ? (
                  <div
                    className={clsx(
                      "container-fluid",
                      "py-2",
                      styles.container
                    )}
                  >
                    <StripeCheckout
                      email={email}
                      token={onToken}
                      stripeKey={publicKey}
                    >
                      <button type="button" className="button">
                        {loading ? (
                          <Spinner
                            animation="border"
                            role="status"
                            color={"white"}
                          />
                        ) : (
                          "Subscribe"
                        )}
                      </button>
                    </StripeCheckout>
                  </div>
                ) : (
                  <button type="button" className="button" onClick={showAlert}>
                    {publicKey ? (
                      "Subscribe"
                    ) : (
                      <Spinner
                        animation="border"
                        role="status"
                        color={"white"}
                      />
                    )}
                  </button>
                )}
              </center>
            </div>
          </div>
        </div>
      </section>
      <FreeFooter />
    </>
  );
};

export default BillingPage;
