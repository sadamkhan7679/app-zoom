/* eslint-disable no-console */
/* eslint-disable no-alert */
import * as axios from 'axios'
import PRICING_API_URL from '../../../constants/pricing/apiUrl'

const postPricingState = async (pricingObject) => {
  try {
    const response = await axios({
      method: 'post',
      url: new URL(`${PRICING_API_URL}/price`),
      data: pricingObject,
    })
    const { id } = response.data
    return id
  } catch (error) {
    const msg = 'Failed to sign up.'
    console.error(msg)
    console.error(error)
    alert(msg)
    return null
  }
}

export default postPricingState
