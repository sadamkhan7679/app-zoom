import React, { useEffect } from 'react'
import path from 'path'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'
import EstimateBreakdown from '../../../components/pricing/estimate/estimateBreakdown'
import EstimateText from '../../../components/pricing/estimate/estimateText'
import EstimateValue from '../../../components/pricing/estimate/estimateValue'
import OptionalInfo from '../../../components/pricing/optionalInfo'
import findFirstNullQuestion from '../../../functions/pricing/findFirstNullQuestion'
import usePricingStateSync from '../../../hooks/pricing/usePricingStateSync'
import useClidParser from '../../../hooks/pricing/useClidParser'

const EstimateLayout = () => {
  const Pricing = useSelector((state) => state.Pricing)
  const { answers, hasSignedUp, linkCount } = Pricing;

  useClidParser()

  // Post or put updated state to back-end.
  usePricingStateSync()

  useEffect(() => {
    if (!window) return () => { }

    // Redirect to unanswered question if not all answers complete.
    const firstNullQuestion = findFirstNullQuestion(answers)

    if (firstNullQuestion !== undefined && hasSignedUp && linkCount > 0) {
      const to = path.join('/cost-to-make-an-app', firstNullQuestion.id)
      navigate(to)
    }
    else if (
      firstNullQuestion !== undefined &&
      (
        firstNullQuestion.id === 'platforms'
        || firstNullQuestion.id === 'name'
        || firstNullQuestion.id === 'login'
      )
    ) {
      const to = path.join('/cost-to-make-an-app', firstNullQuestion.id)
      navigate(to)
    }
    else if (firstNullQuestion !== undefined && hasSignedUp && linkCount === 0) {
      const to = path.join('/cost-to-make-an-app', 'signupGreeting')
      navigate(to)
    }
    else if (hasSignedUp === false) {
      const to = path.join('/cost-to-make-an-app', 'sign-up')
      navigate(to)
    }

    return () => { }
  }, [])

  return (
    <>
      <EstimateText heading="Your Estimate" />
      <EstimateValue />
      <center>
        <div className="container">
                  <p className="section__p">
                    To check case study
                    <a href="https://app.opzoom.com/case-study"> [Here]</a>
                  </p>
                  <p className="section__p">
                    To check sample apps
                    <a href="https://app.opzoom.com/sample-apps"> [Here]</a>
                  </p>
        </div>
      </center>
      <EstimateBreakdown />
      {/* <OptionalInfo /> */}
    </>
  )
}

export default EstimateLayout
