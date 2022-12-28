const axios = require('axios');
const settings = require('../../src/library/settings');

/**
 * Log a page load
 * @param env
 * @param id
 * @returns {Promise<any>}
 */
const getLogs = async ({ env, id }) => {
  const data = {
    id,
  };
  const response = await axios({
    method: 'get',
    url: `${env.ROOT}/getlogs`,
    data,
  });

  return response.data;
};

/**
 * Steps in sequence.
 * @param stage
 * @returns {Promise<void>}
 */
const test = async ({ stage, id }) => {
  try {
    const out = await getLogs({ env: settings[stage], id });
    console.dir(out, { depth: null });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Format :
 * node test/api/getLogs [test|dev|sim] id
 * node test/api/getLogs test 0de14660-14e0-11ec-804e-51e6d906a9cb
 */
test({ stage: process.argv[2], id: process.argv[3] });
