import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import classConcat from "../../../util/ClassConcat";
import styles from "./MobileNav.module.css";
import CtaButton from "../../common/CtaButton/CtaButton";

const MobileNav = ({ links, pageId, show, handleLinkClick }) => (
  <nav
    className={classConcat(
      styles.mobileNav,
      show ? styles.mobileNavOpen : null
    )}
  >
    <ul
      className={classConcat(
        styles.mobileNavList,
        show ? styles.mobileNavListOpen : null
      )}
    >
      {links.map(({ to, text }) => (
        <li key={Math.random() * 1000} className={styles.mobileNavItem}>
          <Link
            to={to}
            onClick={handleLinkClick}
            className={classConcat(
              styles.link,
              pageId === { to } ? styles.linkNavigated : null
            )}
          >
            {text}
          </Link>
        </li>
      ))}
      <li className={"MobileNav"}>
        <CtaButton className={styles.bookingBtn} show showInitial />
      </li>
      <li className={"MobileNav"}>
        <CtaButton
          className={styles.bookingBtn}
          to="/contact-us"
          children="Contact Us"
          show
          showInitial
        />
      </li>
    </ul>
  </nav>
);

MobileNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  pageId: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default MobileNav;
