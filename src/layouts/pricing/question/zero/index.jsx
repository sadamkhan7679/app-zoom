import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// import QUESTIONS from '../../../../constants/pricing/questions'
import EstimateBar from '../../../../components/pricing/estimate/estimateBar'
// import QuestionNumber from '../../../../components/pricing/question/questionNumber'
import QuestionText from '../../../../components/pricing/question/questionText'
// import QuestionOptionGroup from '../../../../components/pricing/question/questionOptionGroup'
import GoBack from '../../../../components/pricing/goBack'

// import checkLinkCount from '../../../../functions/pricing/checkLinkCount'
// import appSvg from '../../../../assets/pricing/app.svg'
// import figmaSvg from '../../../../assets/pricing/figma.svg'
// import pencilSvg from '../../../../assets/pricing/pencil.svg'
// import questionSvg from '../../../../assets/pricing/question.svg'
// import textSvg from '../../../../assets/pricing/text.svg'

import MoreForm from "./moreForm";
import MoreText from "./moreText";
import { useSelector } from 'react-redux'

const ZeroQuestion = ({ index, question, prevQuestion }) => {

    const Pricing = useSelector((state) => state.Pricing);
    const { answers, email } = Pricing;


    return (
        (
            <>
                {/* <EstimateBar /> */}
                {/* <QuestionNumber
                    index={index + 1}
                    count={QUESTIONS.length}
                /> */}
                <QuestionText
                    index={'More Information'}
                    // heading="more information"
                >
                    {/* <p className="section__p">
                        Other features such as messaging, comments, credit card or bank payments, HIPAA compliance, machine learning, or other technology.
                    </p> */}
                </QuestionText>
               
                <MoreText heading="The Quote">
                    {/* <h2 className="section__h2">What is your name?</h2> */}
                </MoreText>
                <MoreForm email={email} question={question} />

                <GoBack prevQuestionId={'marketing'} />
            </>
        )
    )
}

ZeroQuestion.propTypes = {
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

ZeroQuestion.defaultProps = {
    prevQuestion: null,
}

export default ZeroQuestion
