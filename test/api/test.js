const axios = require('axios');
const settings = require('../../src/library/settings');
// const axios = require('../sim')

const test = async () => {
  try {
    await axios({
      method: 'get',
      url: `${settings.test.ROOT}/tst`,
    });
  } catch (error) {
    // const msg = 'Failed to sign up.'
    // console.error(msg)
    // console.error(error)
  }
};

test();
