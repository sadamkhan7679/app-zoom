import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import classConcat from '../../../../util/ClassConcat'
import QUESTIONS from '../../../../constants/pricing/questions'
import EstimateBar from '../../../../components/pricing/estimate/estimateBar'
import QuestionNumber from '../../../../components/pricing/question/questionNumber'
import QuestionText from '../../../../components/pricing/question/questionText'
// import QuestionOptionGroup from '../../../../components/pricing/question/questionOptionGroup'
import GoBack from '../../../../components/pricing/goBack'
import checkFunding from '../../../../functions/pricing/checkFunding'
import { useDispatch, useSelector } from "react-redux";
import findFirstNullQuestion from '../../../../functions/pricing/findFirstNullQuestion';



// import appSvg from '../../../../assets/pricing/app.svg'
// import figmaSvg from '../../../../assets/pricing/figma.svg'
// import pencilSvg from '../../../../assets/pricing/pencil.svg'
// import questionSvg from '../../../../assets/pricing/question.svg'
// import textSvg from '../../../../assets/pricing/text.svg'

import MoreFormRow from './moreForm';
import PRICING_ACTIONS from '../../../../redux/actions/Pricing'
import VALIDATORS from '../../../../util/validators'


const FundingTypeQuestion = ({ index, question, prevQuestion }) => {

    const dispatch = useDispatch();
    const { answers, email, phone, charge } = useSelector((state) => state.Pricing);

    const [answersComp, setAnswers] = React.useState({
        equity: false,
        debt: false,
        rsp: false,
        others: false
    })

    const [toggle, setToggle] = React.useState(false)

    useEffect(() => {
        if (toggle) {
            const setAnswer = PRICING_ACTIONS.setFunding(answersComp)
            dispatch(setAnswer)
        }
    }, [answersComp])

    useEffect(() => {
        checkFunding(answers, phone, charge, findFirstNullQuestion)

        // if (answers.get('fundingType') !== null && answers.get('fundingType') !== undefined) {
        //     setAnswers(answers.get('fundingType'))
        //     // dispatch(setAnswer)
        // }
        setToggle(true)
    }, [])

    return (
        (
            <>
                <EstimateBar />
                <QuestionNumber
                    index={index + 1}
                    count={QUESTIONS.length}
                />
                <div className={classConcat('container', styles.container)} >
                    <h4 className="section__h1">Funding Type</h4>
                    <p className="section__p">
                        Depending on your situation, OpZoom may offer
                        various funding options. These options include debt, equity and revenue share.
                    </p>
                    <p className="section__p">
                        Unlike many funding options, OpZoom funding options are available to applicants as early as a week.
                    </p>
                    <p className="section__p">
                        About 25% of companies that apply are offered some type of funding.
                    </p>
                    <p className="section__p">
                        If you like, you may also take the option of being introduced to various associated investors.
                    </p>
                </div>
                <QuestionText
                    index={index + 1}
                    heading="What kind of funding would you consider?"
                >
                    <p className="section__p">
                        Please select <b>ALL</b> options you would consider.
                    </p>
                </QuestionText>


                <MoreFormRow answers={answersComp} setAnswers={setAnswers} question={question} />


                {/* <QuestionOptionGroup
                    question={question}
                    options={[
                        {
                            // imgSrc: questionSvg,
                            text: 'Equity',
                            info: (
                                <>
                                    Equity
                                </>
                            ),
                            priceText: '$$$',
                            questionId: question.id,
                            answerId: question.answerIds.EQUITY,
                        },
                        {
                            // imgSrc: textSvg,
                            text: 'Revenue Share Partnership',
                            info: (
                                <>
                                    Revenue Share Partnership
                                </>
                            ),
                            priceText: '$$$',
                            questionId: question.id,
                            answerId: question.answerIds.REVENUE_SHARE_PARTNERSHIP,
                        },
                        {
                            // imgSrc: textSvg,
                            text: 'Debt',
                            info: (
                                <>
                                    Debt
                                </>
                            ),
                            priceText: '$$$',
                            questionId: question.id,
                            answerId: question.answerIds.DEBT,
                        },
                    ]}
                /> */}
                <GoBack prevQuestionId={prevQuestion.id} />
            </>
        )
    )
}

FundingTypeQuestion.propTypes = {
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

FundingTypeQuestion.defaultProps = {
    prevQuestion: null,
}

export default FundingTypeQuestion
