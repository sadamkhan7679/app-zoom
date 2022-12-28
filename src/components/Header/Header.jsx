import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import logo from "./img/logo.png";
import styles from "./Header.module.css";
import useBreakpoint, { BREAKPOINT } from "../../hooks/useBreakpoint";
import { useLocation } from "@reach/router";
import FadeTransition, {
  FADE_DIRECTION,
} from "../common/FadeTransition/FadeTransition";
import QUANTISED_SCROLLER_ACTIONS from "../../redux/actions/QuantisedScroller";
import Nav from "./Nav/Nav";
import MenuIcon from "./MenuIcon/MenuIcon";
import MobileNav from "./MobileNav/MobileNav";
import { test } from "../../library/api/pageLoad";
import getCookie from "../../functions/getCookie";
import parsePricingId from "../../functions/pricing/parsePricingId";
import { v4 as uuidv4 } from "uuid";
const Header = ({ pageId, hide }) => {
  // Constants
  const links = [
    {
      to: "/case-study",
      text: "Case Study",
    },
    {
      to: "/sample-apps",
      text: "Sample Apps",
    },
    // {
    //   to: '/build-process',
    //   text: 'Build Process',
    // },
    {
      to: "/build-phases",
      text: "Build Phases",
    },
    {
      to: "/testimonials",
      text: "Testimonials",
    },
  ];
  // Hooks
  const breakpoint = useBreakpoint();
  const { navId } = useSelector((state) => state.QuantisedScroller);
  const dispatch = useDispatch();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);
  // Close menu when navigation changes
  // console.log("header run");
  React.useEffect(() => {
    setMobileNavOpen(false);
  }, [navId, pageId]);
  // Events
  const handleNavClick = () => {
    const navToTop = QUANTISED_SCROLLER_ACTIONS.navTo("");
    dispatch(navToTop);
  };
  const handleMobileMenuToggle = () => {
    setMobileNavOpen((currentlyOpen) => !currentlyOpen);
  };
  // Computations
  const isSmall = breakpoint < BREAKPOINT.MD;
  // Render

  useEffect(() => {
    const urlId = parsePricingId(location);
    if (urlId) {
      document.cookie = `uid=${urlId}`;
    }
    let uid = getCookie("uid");
    if (!uid) {
      console.log("Genereated uid");
      let id = uuidv4();
      uid = id;
      document.cookie = `uid=${id}`;
    }
    test({
      stage: process.env.BUILD_ENV,
      // stage: 'test',
      uid: uid ? uid : null,
      url: window.location.href,
    });

    window.addEventListener("click", function (event) {
      // event.preventDefault();
      if (
        !event?.target?.classList[0]?.includes("MobileNav") &&
        isMobileNavOpen === true
      ) {
        setMobileNavOpen(false);
      }
    });
  }, [isMobileNavOpen, pageId]);

  // console.log(window.location.href);

  return (
    <FadeTransition
      tag="header"
      show={!hide}
      showInitial
      direction={FADE_DIRECTION.NONE}
      className={styles.header}
      style={{
        pointerEvents: hide ? "none" : null,
      }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.brand} onClick={handleNavClick}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.logoImg} />
          </div>
          {isSmall ? null : <h3 className={styles.brandName}>OPZOOM</h3>}
        </Link>
        {isSmall ? null : (
          <Nav pageId={pageId} onLinkClick={handleNavClick} links={links} />
        )}
        {isSmall ? <MenuIcon onToggle={handleMobileMenuToggle} /> : null}
      </div>
      {isSmall ? (
        <MobileNav
          pageId={pageId}
          show={isMobileNavOpen}
          handleLinkClick={handleNavClick}
          links={links}
        />
      ) : null}
    </FadeTransition>
  );
};

Header.propTypes = {
  hide: PropTypes.bool,
  pageId: PropTypes.string.isRequired,
};

Header.defaultProps = {
  hide: false,
};

export default Header;
