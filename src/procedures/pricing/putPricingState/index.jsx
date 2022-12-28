/* eslint-disable no-console */
/* eslint-disable no-alert */
import * as axios from 'axios'
import PRICING_API_URL from '../../../constants/pricing/apiUrl';



const putPricingState = async (id, pricingObject) => {
  const requestUrl = PRICING_API_URL + `/price/update/${id}`;
  try {
    await axios({
      method: 'put',
      // url: new URL(`/update/${id}`, PRICING_API_URL),
      url: requestUrl,
      data: pricingObject,
    })
  } catch (error) {
    const msg = 'Server Error - Failed to update form information.'
    console.error(msg)
    console.error(error)
    // alert(msg)
  }
}

export default putPricingState
