import getCookie from '../../getCookie'
const packPricingObject = ({
  answers,
  name,
  email,
  phone,
  optionalInfo,
  clid,
  estimate,
  linkCount,
  emails,
  verifyCount,
  tsUnsubscribe,
  id,
  server,
}) => ({
  name,
  email,
  phone,
  config: {
    answers: answers.toJS(),
    optionalInfo: optionalInfo.toJS(),
    linkCount,
    emails: emails,
    estimate: estimate,
  },
  clid,
  verifyCount,
  tsUnsubscribe,
  id,
  server,
  uid: getCookie('uid'),
})

export default packPricingObject
