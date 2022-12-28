import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import * as axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import styles from "./styles.module.css";
import SignUpFormRow, {
  INPUT_TYPE,
} from "../pricing/signUp/signUpForm/signUpFormRow";
import VALIDATORS from "../../util/validators";
import PRICING_ACTIONS from "../../redux/actions/Pricing";
import FadeTransition, {
  FADE_DIRECTION,
} from "../common/FadeTransition/FadeTransition";
import PRICING_API_URL from "../../constants/pricing/apiUrl";
import putPricingState from "../../procedures/pricing/putPricingState";
import packPricingObject from "../../functions/pricing/packPricingObject";
import { navigate } from "gatsby";

const ContactUs = ({ history }) => {
  const Pricing = useSelector((state) => state.Pricing);
  const dispatch = useDispatch();
  const { email, phone, message, name } = Pricing;
  const [loading, setLoading] = React.useState(false);
  const [showField, setShowFields] = React.useState(false);
  const [formSubmited, setFormSubmited] = React.useState(false);
  const [submitClicked, setSubmitClicked] = React.useState(false);

  const showContactFields = (e) => {
    e.preventDefault();
    setShowFields(true);
  };

  const isSignUpValid = () =>
    phone &&
    VALIDATORS.EMAIL(email) &&
    VALIDATORS.NAME(name) &&
    VALIDATORS.MESSAGE(message) &&
    VALIDATORS.PHONE(phone)
      ? true
      : false;

  const isFieldEmpty = () =>
    message.length > 0 && email && name ? true : false;

  const SubmitForm = async (e) => {
    phone ? "" : setSubmitClicked(true);
    if (!isFieldEmpty()) {
      return;
    }
    e.preventDefault();
    if (!isSignUpValid()) {
      return;
    }
    setLoading(true);
    let data = {
      email: email,
      name: name,
      phone: phone,
      mesg: message,
      id: "code",
    };
    if (Pricing.id) {
      data.id = Pricing.id;
    }
    axios
      .put(`${PRICING_API_URL}/price/send_code`, data)
      .then(function (response) {
        const setId = PRICING_ACTIONS.setId(response.data.id);
        console.log(response.data);
        dispatch(setId);
        setLoading(false);
        Swal.fire({
          title: "Enter Your Confirmation Code",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Confirm Code",
          confirmButtonColor: "#77CC6D",
          showLoaderOnConfirm: true,
          preConfirm: (code) => {
            const data = {
              code: code,
              id: response.data.id,
            };
            return axios({
              method: "put",
              url: `${PRICING_API_URL}/price/test_code/${response.data.id}`,
              data: data,
            })
              .then((response) => {
                if (response.data !== 1) {
                  throw new Error(response.statusText);
                }
                return response;
              })
              .catch((error) => {
                console.log(">>>>>>>>>>>>>>>>", error);
                Swal.showValidationMessage(`Error: Wrong Code, Try Again`);
              });
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.isConfirmed === true) {
            const action = PRICING_ACTIONS.setVerifyCount(
              Pricing.verifyCount + 1
            );
            dispatch(action);
            setFormSubmited(true);
            navigate("/cost-to-make-an-app/new-thank-you/");
          }
        });
      })
      .catch(function (error) {
        Swal.fire("Sorry", error, "error").then(async () => {});
        setLoading(false);
        console.error("Failed to update.");
        console.error(">>>>>>>>>>>>>", error);
      });
  };

  const enabled = isSignUpValid();
  // Render
  return (
    <>
      {!formSubmited ? (
        <form>
          <FadeTransition
            className={clsx(
              "container",
              "px-0",
              "py-1",
              styles.container,
              styles.devPanelExpanded2
            )}
            tag="div"
            delay="0.0s"
            direction={FADE_DIRECTION.NONE}
            show={true}
          >
            <div
              className={clsx(
                "container",
                styles.panel,
                styles.designPanelExpanded
              )}
            >
              <div className={styles.heading} style={{ marginBottom: "20px" }}>
                Your <b>FREE</b> 20 minute consult
              </div>
              <b>How will you use it?</b>
              <SignUpFormRow
                title=""
                inputType="text"
                selector={(state) => state.Pricing.message}
                actionFn={PRICING_ACTIONS.setMessage}
                validator={VALIDATORS.MESSAGE}
                type={INPUT_TYPE.MESSAGE}
                hint="Message Should be more than 10 characters."
              />
              {showField && (
                <>
                  <SignUpFormRow
                    title="Name"
                    inputType="text"
                    selector={(state) => state.Pricing.name}
                    actionFn={PRICING_ACTIONS.setName}
                    validator={VALIDATORS.NAME}
                    type={INPUT_TYPE.NAME}
                    hint="Name must be alphabetical characters separated by a space."
                  />
                  <SignUpFormRow
                    title="Email"
                    inputType="email"
                    selector={(state) => state.Pricing.email}
                    actionFn={PRICING_ACTIONS.setEmail}
                    validator={VALIDATORS.EMAIL}
                    hint="Must be in valid email format. (e.g. bob@mail.com)"
                  />
                  <SignUpFormRow
                    title="Phone Number"
                    inputType="text"
                    selector={(state) => state.Pricing.phone}
                    actionFn={PRICING_ACTIONS.setPhone}
                    validator={VALIDATORS.PHONE}
                    type={INPUT_TYPE.PHONE}
                    hint="Should be a US phone number with 10 digits."
                  />
                  {!phone && submitClicked && (
                    <p style={{ color: "red" }}>
                      Should be a US phone number with 10 digits.
                    </p>
                  )}
                </>
              )}
            </div>
            <div className={clsx("container-fluid", "py-2")}>
              {showField ? (
                <button
                  type="submit"
                  className={clsx("button")}
                  onClick={SubmitForm}
                >
                  {loading ? (
                    <Spinner animation="border" role="status" color={"white"} />
                  ) : (
                    "Submit"
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  className={clsx("button")}
                  onClick={showContactFields}
                >
                  Send
                </button>
              )}
            </div>
          </FadeTransition>
        </form>
      ) : (
        <FadeTransition
          className={clsx(
            "container",
            "px-0",
            "py-1",
            styles.container,
            styles.devPanelExpanded2
          )}
          tag="div"
          delay="0.0s"
          direction={FADE_DIRECTION.NONE}
          show={true}
        >
          <div
            className={clsx(
              "container",
              styles.panel,
              styles.designPanelExpanded
            )}
          >
            <h5>Thank You</h5>
            <p>We will contact you shortly.</p>
          </div>
        </FadeTransition>
      )}
    </>
  );
};

export default ContactUs;
