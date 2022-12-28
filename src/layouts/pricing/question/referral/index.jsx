import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import classConcat from '../../../../util/ClassConcat'
import QUESTIONS from '../../../../constants/pricing/questions'
import EstimateBar from '../../../../components/pricing/estimate/estimateBar'
import QuestionNumber from '../../../../components/pricing/question/questionNumber'
import QuestionText from '../../../../components/pricing/question/questionText'
import QuestionOptionGroup from '../../../../components/pricing/question/questionOptionGroup'
import GoBack from '../../../../components/pricing/goBack'
import PRICING_ACTIONS from '../../../../redux/actions/Pricing'


import findFirstNullQuestion from '../../../../functions/pricing/findFirstNullQuestion';
import calcFirstlandingPage from '../../../../functions/pricing/calcFirstlandingPage';

import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";


const ReferralQuestion = ({ index, question, prevQuestion }) => {


    const Pricing = useSelector((state) => state.Pricing);
    const { answers, verifyCount, charge } = Pricing;
    const [myPrevQuestion, setMyPrevQuestion] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        // if (answers.get('context') === 'personal'){
        //     const setAnswer = PRICING_ACTIONS.setAnswer("referral", "no")
        //     dispatch(setAnswer)

        //     navigate('/cost-to-make-an-app/patent' )
        // }


        if (answers.get('hasWebsite') === 'yes') {
            setMyPrevQuestion(QUESTIONS[10])
        } else if (answers.get('hasWebsite') === 'no') {
            setMyPrevQuestion(QUESTIONS[9])
        }

        // prevQuestion = 'hasWebsite' || 'website'

    }, [])

    return (
        <>
            <EstimateBar />
            <QuestionNumber
                index={index + 1}
                count={QUESTIONS.length}
            />
            <div className={classConcat('container', styles.container)} >
                <h4 className="section__h1">Referral</h4>
                <p className="section__p">
                    Referral partners earn $1,000 per customer referred to us who buys an app.
                </p>

                <p className="section__p">
                    And $100 per customer who buys designs.
                </p>
            </div>
            <QuestionText
                index={index + 1}
                heading="Are you interested in becoming a referral partner?"
            >
                <p className="section__p">
                    Please select an option.
                </p>
            </QuestionText>
            <QuestionOptionGroup
                nextQuestion={findFirstNullQuestion(answers) === undefined ? calcFirstlandingPage(charge, verifyCount) : 'technology'}
                question={question}
                options={[
                    {
                        // imgSrc: questionSvg,
                        text: 'YES',
                        info: (
                            <>
                                Yes, I want to be a referral partner.
                            </>
                        ),
                        priceText: '$$$',
                        questionId: question.id,
                        answerId: question.answerIds.YES,
                    },
                    {
                        // imgSrc: textSvg,
                        text: 'NO',
                        info: (
                            <>
                                No, I want to be a referral partner.
                            </>
                        ),
                        priceText: '$$$',
                        questionId: question.id,
                        answerId: question.answerIds.NO,
                    }
                ]}
            />

            {
                myPrevQuestion ?
                    <GoBack prevQuestionId={myPrevQuestion.id} />
                    : ''
            }
        </>
    )
}

ReferralQuestion.propTypes = {
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

ReferralQuestion.defaultProps = {
    prevQuestion: null,
}

export default ReferralQuestion
