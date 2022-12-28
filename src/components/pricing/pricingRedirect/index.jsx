import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from 'gatsby'
import * as axios from 'axios'
import * as Cookies from 'js-cookie'
import PRICING_ACTIONS from '../../../redux/actions/Pricing'
import parsePricingId from '../../../procedures/pricing/parsePricingId'
import fetchPricingState from '../../../procedures/pricing/fetchPricingState'

export const PRICING_PAGE_TYPE = {
  LANDING: 'LANDING',
  QUESTION: 'QUESTION',
  SIGN_UP: 'SIGN_UP',
  ESTIMATE: 'ESTIMATE',
}

const PricingRedirect = ({ pageType, questionId }) => {
  // Redux
  const {
    // started,
    answers,
    hasSignedUp,
    clid,
    optionalInfo,
  } = useSelector((state) => state.Pricing)
  const dispatch = useDispatch()
  // Router
  const location = useLocation()
  // Functions
  const getFirstIncompleteQuestion = () => {
    if (answers.get('platforms') === null) return 'platforms'
    if (answers.get('login') === null) return 'login'
    if (answers.get('design') === null) return 'design'
    if (answers.get('level-of-detail') === null) return 'level-of-detail'
    if (answers.get('context') === null) return 'context'
    return null
  }
  // Effects
  // - Parse and store clid from url.
  React.useEffect(() => {
    if (!window) return
    // Extract id
    if (!location.search) return
    const params = queryString.parse(location.search)
    if (!params) return
    // if (!params.gclid) return
    //
    const { gclid: nextClid } = params
    if (clid === nextClid) return
    //
    const setClid = PRICING_ACTIONS.setClid(nextClid)
    dispatch(setClid)
  })
  // - If id provided, fetch state from back-end.
  React.useEffect(() => {
    const id = parsePricingId(location)
    if (!id) return

    (async () => {
      // Set ID Cookie
      Cookies.set('opz-pricing-id', { id }, { sameSite: true })

      // Fetch state.
      const receivedState = await fetchPricingState(id)
      if (!receivedState) return null

      // Dispatch action.
      const receiveStateAction = PRICING_ACTIONS.receiveState(receivedState)
      dispatch(receiveStateAction)

      return null
    })()
  }, [])
  // - Perform redirect if necessary
  React.useEffect(() => {
    const firstIncompleteQuestion = getFirstIncompleteQuestion()
    const questionsComplete = (firstIncompleteQuestion === null)
    switch (pageType) {
      case PRICING_PAGE_TYPE.LANDING:
        // If questions complete, but not signed up, redirect to sign-up.
        if (questionsComplete && !hasSignedUp) {
          navigate('/cost-to-make-an-app/sign-up')
          break
        }
        // If questions complete and signed up, redirect to estimate.
        if (questionsComplete && hasSignedUp) {
          navigate('/cost-to-make-an-app/estimate')
          break
        }
        // If not all questions complete, redirect to first incomplete question.
        if (!questionsComplete) {
          // 'platforms' question is on landing page.
          if (firstIncompleteQuestion === 'platforms') break
          navigate(`/cost-to-make-an-app/${firstIncompleteQuestion}`)
          break
        }
        break
      case PRICING_PAGE_TYPE.QUESTION:
        // If questions complete, but not signed up, redirect to sign-up.
        if (questionsComplete && !hasSignedUp) {
          navigate('/cost-to-make-an-app/sign-up')
          break
        }
        // If questions complete and signed up, redirect to estimate.
        if (questionsComplete && hasSignedUp) {
          navigate('/cost-to-make-an-app/estimate')
          break
        }
        // If not first incomplete question, redirect to first incomplete question.
        if (questionId !== firstIncompleteQuestion && firstIncompleteQuestion !== null) {
          // 'platforms' question is on landing page.
          if (firstIncompleteQuestion === 'platforms') {
            navigate('/cost-to-make-an-app')
            break
          }
          navigate(`/cost-to-make-an-app/${firstIncompleteQuestion}`)
          break
        }
        break
      case PRICING_PAGE_TYPE.SIGN_UP: {
        // If questions not complete, redirect to first incomplete question.
        if (!questionsComplete) {
          // 'platforms' question is on landing page.
          if (firstIncompleteQuestion === 'platforms') {
            navigate('/cost-to-make-an-app')
            break
          }
          navigate(`/cost-to-make-an-app/${firstIncompleteQuestion}`)
          break
        }
        // If questions complete and signed up, redirect to estimate.
        if (questionsComplete && hasSignedUp) {
          navigate('/cost-to-make-an-app/estimate')
          break
        }
        break
      }
      case PRICING_PAGE_TYPE.ESTIMATE: {
        // If questions not complete, redirect to first incomplete question.
        if (!questionsComplete) {
          // 'platforms' question is on landing page.
          if (firstIncompleteQuestion === 'platforms') {
            navigate('/cost-to-make-an-app')
            break
          }
          navigate(`/cost-to-make-an-app/${firstIncompleteQuestion}`)
          break
        }
        // If inputs complete and not signed up, redirect to sign up.
        if (questionsComplete && !hasSignedUp) {
          navigate('/cost-to-make-an-app/sign-up')
          break
        }
        break
      }
      default:
        throw new Error(
          `Unrecognised pricing page type '${pageType}'.`,
        )
    }
  })
  // Render
  return null
}

PricingRedirect.propTypes = {
  pageType: PropTypes.string.isRequired,
  questionId: PropTypes.string,
}

PricingRedirect.defaultProps = {
  questionId: null,
}

export default PricingRedirect
