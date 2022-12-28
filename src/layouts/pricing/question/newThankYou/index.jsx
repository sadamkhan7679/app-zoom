import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EstimateText from "../../../../components/pricing/estimate/estimateText";
import EstimateValue from "../../../../components/pricing/estimate/estimateValue";
import EstimateBreakdown from "../../../../components/pricing/estimate/estimateBreakdown"
import GoBack from "../../../../components/pricing/goBack";
import useClidParser from "../../../../hooks/pricing/useClidParser";
import clsx from "clsx";
import styles from "../../../../components/contactUs/styles.module.css";
import FadeTransition, {FADE_DIRECTION} from "../../../../components/common/FadeTransition/FadeTransition";


const PricingNewThankYouLayout = ({ index, question, prevQuestion, }) => {

      useClidParser();
      return (
        <>
            <FadeTransition
                className={clsx(
                    'container',
                    'px-0',
                    'py-1',
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
                        'container',
                        styles.panel,
                        styles.designPanelExpanded
                    )}
                >
                    <h5>
                        Thank You
                    </h5>
                    <p>
                        We will contact you shortly.
                    </p>
                </div>
        </FadeTransition>
          <EstimateText heading="Your Estimate" />
          <EstimateValue />
          {/* <EstimateBar /> */}
          <EstimateBreakdown />

          <GoBack prevQuestionId="sign-up" />
        </>
      );
};

PricingNewThankYouLayout.defaultProps = {
  prevQuestion: null,
}

export default PricingNewThankYouLayout
