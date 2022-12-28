import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./styles.module.css";
import {
  calcDesignEstimate,
  calcDevelopmentEstimate,
} from "../../../../../functions/pricing/calcEstimate";
import currencyFormatter from "currency-formatter";

const EstimateCostRow = ({ category }) => {
  // Hooks
  const { answers } = useSelector((state) => state.Pricing);
  // Functions
  const getCost = () => {
    switch (category) {
      case "Design":
        return calcDesignEstimate(answers);
      case "Development":
        return calcDevelopmentEstimate(answers);
      default:
        throw new Error(
          `Unrecognised estimate breakdown category: ${category}.`
        );
    }
  };
  // Render
  return (
    <div
      className={clsx(
        "row",
        "px-md-2",
        "py-2",
        "my-3",
        "my-md-4",
        "align-items-center",
        styles.row
      )}
    >
      <div className="col-12">
        <span>
          <strong>Total {category} Cost</strong>
        </span>
      </div>
      <div className="col-12">
        <span>
          {/* $
          {getCost().toLocaleString()} */}

          {currencyFormatter.format(getCost(), {
            code: "USD",
          })}
        </span>
      </div>
    </div>
  );
};

EstimateCostRow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default EstimateCostRow;
