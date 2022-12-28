import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
//
import iphone from "../../../../assets/pricing/iphone.svg";
import android from "../../../../assets/pricing/android.svg";
import iphoneAndroid from "../../../../assets/pricing/iphone-android.svg";
//
import form from "../../../../assets/pricing/form.svg";
import noForm from "../../../../assets/pricing/no-form.svg";
//
import bareBones from "../../../../assets/pricing/bare-bones.png";
import detailed from "../../../../assets/pricing/detailed.png";
import beautiful from "../../../../assets/pricing/beautiful.png";
//
import figmaSvg from "../../../../assets/pricing/figma.svg";
import appSvg from "../../../../assets/pricing/app.svg";
import pencilSvg from "../../../../assets/pricing/pencil.svg";
import textSvg from "../../../../assets/pricing/text.svg";
import questionSvg from "../../../../assets/pricing/question.svg";
import FadeTransition, {
  FADE_DIRECTION,
} from "../../../common/FadeTransition/FadeTransition";
import EstimateBreakdownRow from "./estimateBreakdownRow";
import EstimateCostRow from "./estimateCostRow";
//

const EstimateBreakdown = () => {
  // Hooks
  const [isExpanded, setExpanded] = React.useState(false);
  // Constants
  const emptyAnswer = {
    img: null,
    text: null,
  };
  // Events
  const handleToggleClick = () =>
    setExpanded((currentlyExpanded) => !currentlyExpanded);
  // Render
  return (
    <>
      <div className={styles.toggleContainer}>
        <button
          type="button"
          className={styles.toggle}
          onClick={handleToggleClick}
        >
          {isExpanded ? "Hide" : "Show"} Breakdown
        </button>
      </div>
      <FadeTransition
        className={clsx(
          "container",
          "px-0",
          "py-1",
          styles.container,
          isExpanded ? styles.devPanelExpanded2 : null
        )}
        tag="div"
        delay="0.0s"
        direction={FADE_DIRECTION.NONE}
        show={isExpanded}
      >
        <div
          className={clsx(
            "container",
            styles.panel,
            isExpanded ? styles.designPanelExpanded : null
          )}
        >
          <div className={styles.heading}>Design</div>
          <EstimateBreakdownRow
            questionId="design"
            questionText="What type of design do you have?"
            answerGetter={(answerId) => {
              switch (answerId) {
                case "digital":
                  return {
                    img: figmaSvg,
                    text: "XD, Sketch or Figma",
                  };
                case "ref-app":
                  return {
                    img: appSvg,
                    text: "Reference App",
                  };
                case "paper":
                  return {
                    img: pencilSvg,
                    text: "Paper and Pencil",
                  };
                case "written":
                  return {
                    img: textSvg,
                    text: "Written Description",
                  };
                case "none":
                  return {
                    img: questionSvg,
                    text: "No Design",
                  };
                default:
                  return emptyAnswer;
              }
            }}
          />
          <EstimateCostRow category="Design" />
        </div>
      </FadeTransition>

      <FadeTransition
        className={clsx(
          "container",
          "px-0",
          "py-1",
          styles.container,
          isExpanded ? styles.devPanelExpanded2 : null
        )}
        tag="div"
        delay="0.0s"
        direction={FADE_DIRECTION.NONE}
        show={isExpanded}
      >
        <div
          className={clsx(
            "container",
            styles.panel,
            isExpanded ? styles.devPanelExpanded : null
          )}
        >
          <div className={clsx(styles.heading, styles.spaceAbove)}>
            Development
          </div>
          <EstimateBreakdownRow
            questionId="platforms"
            questionText="What platforms will your app be available for?"
            answerGetter={(answerId) => {
              switch (answerId) {
                case "ios":
                  return {
                    img: iphone,
                    text: "iOS",
                  };
                case "android":
                  return {
                    img: android,
                    text: "Android",
                  };
                case "ios-android":
                  return {
                    img: iphoneAndroid,
                    text: "iOS & Android",
                  };
                default:
                  return emptyAnswer;
              }
            }}
          />
          <EstimateBreakdownRow
            questionId="level-of-detail"
            questionText="What level of detail will your UI feature?"
            answerGetter={(answerId) => {
              switch (answerId) {
                case "bare-bones":
                  return {
                    img: bareBones,
                    text: "Bare Bones",
                  };
                case "detailed":
                  return {
                    img: detailed,
                    text: "Detailed",
                  };
                case "beautiful":
                  return {
                    img: beautiful,
                    text: "Beautiful",
                  };
                default:
                  return emptyAnswer;
              }
            }}
          />
          <EstimateBreakdownRow
            questionId="login"
            questionText="Will users have to login to your app?"
            answerGetter={(answerId) => {
              switch (answerId) {
                case "yes":
                  return {
                    img: form,
                    text: "Yes",
                  };
                case "no":
                  return {
                    img: noForm,
                    text: "No",
                  };
                default:
                  return emptyAnswer;
              }
            }}
          />
          <EstimateCostRow category="Development" />
        </div>
      </FadeTransition>

      {/* <FadeTransition
        className={clsx(
          'container',
          'px-0',
          'py-1',
          styles.container,
          isExpanded ? styles.devPanelExpanded2 : null,
        )}
        tag="div"
        delay="0.0s"
        direction={FADE_DIRECTION.NONE}
        show={isExpanded}
      > */}
      {/*<div*/}
      {/*  className={clsx(*/}
      {/*    'container',*/}
      {/*    styles.panel,*/}
      {/*    isExpanded ? styles.devPanelExpanded : null,*/}

      {/*  )}*/}
      {/*>*/}
      {/*<div*/}
      {/*  className={clsx(*/}
      {/*    styles.heading, styles.spaceAbove,*/}
      {/*  )}*/}
      {/*>*/}
      {/*  Additional Options*/}
      {/*</div>*/}
      {/*<EstimateBreakdownRow*/}
      {/*  questionId="funding"*/}
      {/*  questionText="Funding is available for qualified apps. Do you need it?"*/}
      {/*  answerGetter={(answerId) => {*/}
      {/*    switch (answerId) {*/}
      {/*      case 'no':*/}
      {/*        return {*/}
      {/*          text: 'NO',*/}
      {/*        }*/}
      {/*      case 'yes':*/}
      {/*        return {*/}
      {/*          text: 'YES',*/}
      {/*        }*/}
      {/*      default:*/}
      {/*        return emptyAnswer*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<EstimateBreakdownRow*/}
      {/*  questionId="development"*/}
      {/*  questionText="Do you need information about the app development process?"*/}
      {/*  answerGetter={(answerId) => {*/}
      {/*    switch (answerId) {*/}
      {/*      case 'no':*/}
      {/*        return {*/}
      {/*          text: 'NO',*/}
      {/*        }*/}
      {/*      case 'yes':*/}
      {/*        return {*/}
      {/*          text: 'YES',*/}
      {/*        }*/}
      {/*      default:*/}
      {/*        return emptyAnswer*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<EstimateBreakdownRow*/}
      {/*  questionId="features"*/}
      {/*  questionText="Does your app need more features? "*/}
      {/*  answerGetter={(answerId) => {*/}
      {/*    switch (answerId) {*/}
      {/*      case 'no':*/}
      {/*        return {*/}
      {/*          text: 'NO',*/}
      {/*        }*/}
      {/*      case 'yes':*/}
      {/*        return {*/}
      {/*          text: 'YES',*/}
      {/*        }*/}
      {/*      default:*/}
      {/*        return emptyAnswer*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<EstimateBreakdownRow*/}
      {/*  questionId="marketing"*/}
      {/*  questionText="Do you need help marketing your app at scale? "*/}
      {/*  answerGetter={(answerId) => {*/}
      {/*    switch (answerId) {*/}
      {/*      case 'no':*/}
      {/*        return {*/}
      {/*          text: 'NO',*/}
      {/*        }*/}
      {/*      case 'yes':*/}
      {/*        return {*/}
      {/*          text: 'YES',*/}
      {/*        }*/}
      {/*      default:*/}
      {/*        return emptyAnswer*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<EstimateBreakdownRow*/}
      {/*  questionId="technology"*/}
      {/*  questionText="Do you want to see sample apps that use our technology?"*/}
      {/*  answerGetter={(answerId) => {*/}
      {/*    switch (answerId) {*/}
      {/*      case 'no':*/}
      {/*        return {*/}
      {/*          text: 'NO',*/}
      {/*        }*/}
      {/*      case 'yes':*/}
      {/*        return {*/}
      {/*          text: 'YES',*/}
      {/*        }*/}
      {/*      default:*/}
      {/*        return emptyAnswer*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
      {/*</div>*/}
      {/* </FadeTransition> */}
    </>
  );
};

export default EstimateBreakdown;
