import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import tooltipSvg from "./img/tooltip.svg";
import PRICING_ACTIONS from "../../../../../redux/actions/Pricing";
import QuestionOptionInfo from "./questionOptionInfo";

const QuestionOption = ({
  to,
  imgSrc,
  text,
  info,
  // priceText,
  questionId,
  answerId,
}) => {
  // State
  const [isInfoOpen, setInfoOpen] = React.useState(false);
  // Hooks
  const dispatch = useDispatch();
  // Events
  const handleClick = () => {
    const setAnswer = PRICING_ACTIONS.setAnswer(questionId, answerId);
    dispatch(setAnswer);
  };

  // console.log(to);
  // Render
  return (
    <>
      <div className={clsx("container-fluid", styles.container)}>
        <div className={clsx("row", "align-items-center", styles.row)}>
          {imgSrc ? (
            <div className={clsx("col-2", styles.col, styles.leftCol)}>
              <img src={imgSrc} alt="" className={styles.img} />
            </div>
          ) : null}
          <div className={clsx(imgSrc ? "col-7" : "col-9 px-2", styles.col)}>
            <button
              type="button"
              className={styles.text}
              onClick={() => setInfoOpen(true)}
            >
              <span>{text}</span>
              <img
                src={tooltipSvg}
                alt="Question mark icon."
                className={styles.tooltip}
              />
            </button>
          </div>
          <div className={clsx("col-3", styles.col, styles.rightCol)}>
            <Link to={to}>
              <button
                type="button"
                className={styles.button}
                onClick={handleClick}
              >
                <span className={styles.next}>Select &#10003;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <QuestionOptionInfo
        isOpen={isInfoOpen}
        iconSrc={imgSrc}
        heading={text}
        onClose={() => setInfoOpen(false)}
      >
        {info}
      </QuestionOptionInfo>
    </>
  );
};

QuestionOption.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  info: PropTypes.node.isRequired,
  // priceText: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  answerId: PropTypes.string.isRequired,
};

export default QuestionOption;
