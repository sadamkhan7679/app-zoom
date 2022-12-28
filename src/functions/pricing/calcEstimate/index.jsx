import pricingConfig from "../../../../config/pricing-estimate.json";
import snakeToCamel from "../../../util/snakeToCamel";
import each from 'lodash/each';

export const ESTIMATE_MAX = 20000;

export const calcDesignEstimate = (answers) => {
  const designAnswer =
    answers.get("design") !== null && answers.get("design") !== undefined
      ? snakeToCamel(answers.get("design"))
      : null;
  //
  const designEstimate =
    designAnswer === null ? 0 : pricingConfig.design.values[designAnswer];
  return designEstimate;
};

export const calcDevelopmentEstimate = (answers) => {
  const platformsAnswer =
    answers.get("platforms") !== null && answers.get("platforms") !== undefined
      ? answers.get("platforms")
      : null;
  const levelOfDetailAnswer =
    answers.get("level-of-detail") !== null &&
    answers.get("level-of-detail") !== undefined
      ? snakeToCamel(answers.get("level-of-detail"))
      : null;
  const loginAnswer =
    answers.get("login") !== null && answers.get("login") !== undefined
      ? snakeToCamel(answers.get("login"))
      : null;
  //
  let platformsValue = 0;
  each(platformsAnswer, (value, key) => {
    if(value){
      platformsValue += pricingConfig.platforms.values[key];
    }
  });
  const levelOfDetailValue =
    levelOfDetailAnswer === null
      ? 0
      : pricingConfig.levelOfDetail.values[levelOfDetailAnswer];
  const loginValue =
    loginAnswer === null ? 0 : pricingConfig.login.values[loginAnswer];
  //
  const developmentEstimate =
    (platformsValue + loginValue) * (1.0 + levelOfDetailValue);
  return developmentEstimate;
};

const calcTotalEstimate = (answers) => {

  const developmentEstimate = calcDevelopmentEstimate(answers);
  const designEstimate = calcDesignEstimate(answers);
  const totalEstimate = designEstimate + developmentEstimate;
  return totalEstimate;
  
};

export default calcTotalEstimate;
