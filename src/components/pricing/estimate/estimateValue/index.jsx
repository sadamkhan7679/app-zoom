import React from "react";
import { useSelector } from "react-redux";
import calcTotalEstimate from "../../../../functions/pricing/calcEstimate";
import classConcat from "../../../../util/ClassConcat";
import FadeTransition, {
  FADE_DIRECTION,
} from "../../../common/FadeTransition/FadeTransition";
import styles from "./styles.module.css";

import currencyFormatter from "currency-formatter";

const EstimateValue = () => {
  // Hooks
  const { answers } = useSelector((state) => state.Pricing);
  // Render
  return (
    <div className={classConcat("container", styles.container)}>
      <FadeTransition
        tag="span"
        className={styles.value}
        readOnly
        delay="0.25s"
        direction={FADE_DIRECTION.NONE}
        show
      >
        {/* {`$${calcTotalEstimate(answers)}`} */}

        {currencyFormatter.format(calcTotalEstimate(answers), { code: "USD" })}
      </FadeTransition>
    </div>
  );
};

export default EstimateValue;
