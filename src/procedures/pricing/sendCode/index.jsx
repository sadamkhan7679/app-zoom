/* eslint-disable no-console */
/* eslint-disable no-alert */
import * as axios from "axios";
import PRICING_API_URL from "../../../constants/pricing/apiUrl";

const SendCode = async (id, pricingObject) => {
  console.log("SendCode");
  const requestUrl = PRICING_API_URL + `/price/send_code`;
  try {
    const response = await axios({
      method: "put",
      // url: new URL(`/update/${id}`, PRICING_API_URL),
      url: requestUrl,
      data: pricingObject,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    const msg = "Failed to send Code.";
    console.error(msg);
    console.error(error);
    alert(msg);
  }
};

export default SendCode;
