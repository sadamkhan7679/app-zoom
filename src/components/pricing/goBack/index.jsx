import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./styles.module.css";

const GoBack = ({ prevQuestionId, fromPage }) => (
  <div className="container" style={{ marginTop: "40px" }}>
    {fromPage === "sign-up" ? (
      <Link to={`/testimonials2`} className={styles.goBack}>
        ←&nbsp;&nbsp;Back&nbsp;
      </Link>
    ) : (
      <Link
        to={`/cost-to-make-an-app/${prevQuestionId}`}
        className={styles.goBack}
      >
        ←&nbsp;&nbsp;Back&nbsp;
      </Link>
    )}
  </div>
);

GoBack.propTypes = {
  prevQuestionId: PropTypes.string.isRequired,
};

export default GoBack;
