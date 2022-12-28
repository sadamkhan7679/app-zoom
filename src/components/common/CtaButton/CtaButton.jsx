import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import classConcat from "../../../util/ClassConcat";
import styles from "./CtaButton.module.css";
import FadeTransition, {
  FADE_DIRECTION,
} from "../FadeTransition/FadeTransition";

const CtaButton = ({ children, show, showInitial, className, to }) => (
  <Link to={to}>
    <FadeTransition
      tag="span"
      delay="1.2s"
      direction={FADE_DIRECTION.NONE}
      show={show}
      showInitial={showInitial}
      className={classConcat(styles.button, className)}
    >
      {children}
    </FadeTransition>
  </Link>
);

CtaButton.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  showInitial: PropTypes.bool,
  className: PropTypes.string,
};

CtaButton.defaultProps = {
  to: "/cost-to-make-an-app/",
  children: <>Pricing</>,
  showInitial: false,
  className: null,
};

export default CtaButton;
