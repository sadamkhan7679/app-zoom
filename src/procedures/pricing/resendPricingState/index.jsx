/* eslint-disable no-console */
/* eslint-disable no-alert */
import * as axios from 'axios'
import PRICING_API_URL from '../../../constants/pricing/apiUrl'

const resendPricingState = async (id, pricingObject) => {

  const requestUrl = PRICING_API_URL + `/price/resend/${id}`;
  try {
    await axios({
      method: 'put',
      url: requestUrl,
      // url: new URL(`/resend/${id}`, PRICING_API_URL),
      data: pricingObject,
    })
  } catch (error) {
    const msg = 'Server Error - Failed to resend'
    console.error(msg)
    console.error(error)
    // alert(msg)
  }
}

export default resendPricingState
