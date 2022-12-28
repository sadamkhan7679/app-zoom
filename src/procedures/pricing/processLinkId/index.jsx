import * as Cookies from 'js-cookie'
import fetchPricingObject from '../../../functions/pricing/fetchPricingObject'
import parsePricingId from '../../../functions/pricing/parsePricingId'
import PRICING_ACTIONS from '../../../redux/actions/Pricing'

const processLinkId = async (location, dispatch) => {
  const id = parsePricingId(location)

  if (!id) return false

  // Set ID Cookie
  Cookies.set('opz-pricing-id', { id }, { sameSite: true })

  // Fetch state.
  const receivedObject = await fetchPricingObject(id)
  if (!receivedObject) return false

  // Dispatch receive state action.
  const receiveStateAction = PRICING_ACTIONS.receiveObject(receivedObject)
  dispatch(receiveStateAction);

  // Dispatch tempEmail action.
  const tempEmailAction = PRICING_ACTIONS.setTempEmail(receivedObject.email);
  dispatch(tempEmailAction);

  // Dispatch link count increment action.
  const linkIncrAction = PRICING_ACTIONS.incrLinkCount()
  dispatch(linkIncrAction)

  return true
}

export default processLinkId
