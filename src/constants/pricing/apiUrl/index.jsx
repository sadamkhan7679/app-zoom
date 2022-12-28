const urls = {
  dev: "https://api.opzoom.com/signups/dev",
  default: "https://api.opzoom.com/signups/test",
};

const { BUILD_ENV } = process.env;
const PRICING_API_URL =
  BUILD_ENV && urls[BUILD_ENV] ? urls[BUILD_ENV] : urls["default"];

console.log("++++", BUILD_ENV, PRICING_API_URL);

export default PRICING_API_URL;
