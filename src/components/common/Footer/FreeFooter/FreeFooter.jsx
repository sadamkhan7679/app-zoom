import React from "react";
import { useDispatch } from "react-redux";
import useBreakpoint, { BREAKPOINT } from "../../../../hooks/useBreakpoint";
import BOOKING_MODAL_ACTIONS from "../../../../redux/actions/BookingModal";
import BOOKING_URL from "../../../../util/bookingUrl";
import classConcat from "../../../../util/ClassConcat";
import Brand from "../../Brand/Brand";
import FooterLinkGroup from "./FooterLinkGroup/FooterLinkGroup";
import twitter from "../../../../assets/twitter-icon.png";
import styles from "./FreeFooter.module.css";

const FreeFooter = () => {
  // Redux
  const dispatch = useDispatch();
  // Hooks
  const breakpoint = useBreakpoint();
  // Computations
  const isSmall = breakpoint < BREAKPOINT.MD;
  // Render
  return (
    <footer
      className={classConcat("container-fluid", "px-3", "py-4", styles.footer)}
    >
      <div className={classConcat("row", styles.row)}>
        <div className={classConcat("col-md-4", "py-3", styles.col)}>
          <Brand showText />
        </div>
        <div className={classConcat("col-md-4", "px-5", "py-2", styles.col)}>
          <FooterLinkGroup
            links={[
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
            ]}
          />
        </div>
        <div className={classConcat("col-md-4", "px-5", "py-2", styles.col)}>
          <FooterLinkGroup
            links={[
              {
                to: "/copyright",
                text: "Copyright",
              },
              {
                to: "/about-us",
                text: "About Us",
              },
              {
                to: "/terms-of-service",
                text: "Terms of Service",
              },
              {
                to: "/contact-us",
                text: "Contact Us",
              },
              {
                to: "https://twitter.com/OpZoomFund?ref_src=twsrc%5Etfw",
                text: (
                  <>
                    <img src={twitter} width="25px" height="25px" /> Follow
                    @OpZoomFund
                  </>
                ),
                target: "_blank",
              },
              // {
              //   text: (
              //     <div className="twitter-follow-button">
              //       <a
              //         href="https://twitter.com/OpZoomFund?ref_src=twsrc%5Etfw"
              //         // className="twitter-follow-button"
              //         data-show-count="false"
              //         target="_blank"
              //       >
              //         Follow @OpZoomFund
              //       </a>
              //       <script
              //         async
              //         src="https://platform.twitter.com/widgets.js"
              //         charset="utf-8"
              //       ></script>
              //     </div>
              //   ),
              // },
              // {
              //   to: isSmall ? BOOKING_URL : null,
              //   text: 'Schedule Appointment',
              //   onClick: () => {
              //     if (isSmall) return
              //     dispatch(
              //       BOOKING_MODAL_ACTIONS.openBookingModal(),
              //     )
              //   },
              //   target: isSmall ? '_blank' : null,
              //   rel: 'noopener noreferrer',
              // },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default FreeFooter;
