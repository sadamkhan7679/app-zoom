import settings from '../settings';

/* eslint-disable import/prefer-default-export */
const axios = require('axios');

/**
 * Log a page load
 * @param env
 * @param id
 * @returns {Promise<any>}
 */
const logPageLoad = async (env, uid, url) => {
  /**
   * url is the complete url
   * @type {string}
   */

  /**
   * uid is the userID. It identifies a user's session.
   * It can be:
   *    1. null if cookie is empty because the user was never seen before.
   *    2. When it returns a uid is provided which must be stored in a cookie and used in future.
   * @type {{inp: *}}
   */
  const data = {
    // url: "https://yasir-app.opzoom.com/cost-to-make-an-app/?id=1a86caa0-0f7e-11ec-ae40-addc433f36e5&mesg=quote",
    // uid: "gusty wind",
    url,
    uid,
  };
  // console.log("before api", env.ROOT);
  const response = await axios({
    method: 'post',
    url: `${env.ROOT}/price/logPageLoad`,
    data,
  });
  // console.log("after api", data);

  return response.data;
};

/**
 * Steps in sequence.
 * @param stage
 * @returns {Promise<void>}
 */
export const test = async ({ stage, uid, url }) => {
  try {
    console.log(`Stage: ${stage}, uid: ${uid}, url: ${url}`);
    // const out = await logPageLoad(settings[stage], uid, url)
    const out = await logPageLoad(settings[stage], uid, url);
    console.log('User : ');
    console.dir(out.user);
    if (out && out.user) {
      document.cookie = `uid=${out.user.id};path="/"`;
    }
    // console.dir(out, { depth: null });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Format :
 * node test/sim/pageLoad [test|dev|sim]
 */
// test({ stage: process.argv[2] })
