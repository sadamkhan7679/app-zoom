import { Map } from 'immutable'
import OPTIONAL_INFO from '../../../constants/pricing/optionalInfo'
import QUESTIONS from '../../../constants/pricing/questions'

const unpackAnswers = (receivedAnswers) => {
  const questionIds = Object.keys(receivedAnswers)

  const answerEntries = questionIds.map((questionId) => {
    const receivedAnswer = receivedAnswers[questionId]
    return [questionId, receivedAnswer]
  })

  const filteredAnswerEntries = answerEntries.filter(
    ([questionId, receivedAnswer]) => {
      // Ensure question exists.

      if (questionId === 'platforms') return true;

      const question = QUESTIONS.find(
        ({ id }) => id === questionId,
      )
      if (!question) return false

      // Ensure answer exists.
      const possibleAnswers = Object.values(question.answerIds)
      if (!possibleAnswers.includes(receivedAnswer)) return false

      return true
    },
  )

  // const answers = Map(receivedAnswers)
  const answers = Map(filteredAnswerEntries)
  return answers
}

const unpackOptionalInfo = (receivedOptionalInfo) => {
  const receivedOptionalInfoIds = Object.keys(receivedOptionalInfo)
  const optionalInfoIds = Object.values(OPTIONAL_INFO)

  const optionalInfoEntries = receivedOptionalInfoIds.map((optionalInfoId) => {
    const value = receivedOptionalInfo[optionalInfoId]
    return [optionalInfoId, value]
  })

  const filteredOptionalInfoEntries = optionalInfoEntries.filter(
    ([optionalInfoId]) => {
      if (!optionalInfoIds.includes(optionalInfoId)) return false
      return true
    },
  )

  const optionalInfo = Map(filteredOptionalInfoEntries)
  return optionalInfo
}

// Converts received pricing object to pricing state.
const unpackPricingObject = (pricingObject) => {
  const {
    config, name, email, phone, clid, emails, id, charge, verifyCount, tsUnsubscribe, patch, monthlyFee, message, amount
  } = pricingObject

  const {
    answers: receivedAnswers,
    optionalInfo: receivedOptionalInfo,
    linkCount,
  } = config


  const answers = unpackAnswers(receivedAnswers)
  const optionalInfo = unpackOptionalInfo(receivedOptionalInfo)

  const hasSignedUp = true

  return {
    hasSignedUp,
    answers,
    name,
    charge,
    verifyCount,
    tsUnsubscribe,
    patch,
    monthlyFee,
    message,
    amount,
    email,
    phone,
    optionalInfo,
    clid,
    id,
    linkCount,
    emails: emails
  }
}

export default unpackPricingObject
