const axios = require('axios');
const settings = require('../../src/library/settings');

const get = async ({ env }) => {
  try {
    await axios({
      method: 'get',
      url: `${env.ROOT}/proof/list.html`,
    });
  } catch (error) {
    // console.error(error)
  }
};

get({ env: settings[process.argv[2]] });
