import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import GoBack from "../../../../components/pricing/goBack";
import NameForm from "../../../../components/pricing/name/nameForm";
import NameText from "../../../../components/pricing/name/nameText";
import useClidParser from "../../../../hooks/pricing/useClidParser";


const NameQuestion = ({ index, question, prevQuestion }) => {
  const { name, answers } = useSelector((state) => state.Pricing);
  useClidParser();
  return (
    <>
      <NameText heading="The Quote">
        <h2 className="section__h2">What is your name?</h2>
      </NameText>
      <NameText para={true} heading="The Quote">
        <p className="section__p">
          To continue, we need to remember you.
      </p>
      </NameText>
      <NameForm name={name} question={question} />
      <GoBack prevQuestionId={prevQuestion.id} />
    </>
  );
};

NameQuestion.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    answerIds: PropTypes.object.isRequired,
  }).isRequired,
  prevQuestion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    answerIds: PropTypes.object.isRequired,
  }),
}

NameQuestion.defaultProps = {
  prevQuestion: null,
}

export default NameQuestion
