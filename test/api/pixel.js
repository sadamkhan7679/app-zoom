const axios = require('axios');
const settings = require('../../src/library/settings');

const get = async ({ env, id }) => {
  try {
    const params = {
      method: 'get',
      url: `${env.ROOT}/pixel/${id}/test/img.png`,
    };
    await axios(params);
  } catch (error) {
    // console.error(error)
  }
};

get({ env: settings[process.argv[2]], id: process.argv[3] });
