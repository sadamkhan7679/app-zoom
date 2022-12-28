const axios = require('axios');
const settings = require('../../src/library/settings');

const get = async ({ env, id, mesg }) => {
  try {
    await axios({
      method: 'get',
      url: `${env.ROOT}/price/${id}/${mesg}`,
    });
  } catch (error) {
    // console.error(error)
  }
};

// const env = settings.test
// const param = process.argv.slice(2)
// if (param.length > 0) {
//   [id] = param
// } else {
//   id = env.ID
// }

get({ env: settings[process.argv[2]], id: process.argv[3], mesg: process.argv[4] });

// node test/api/get test c2e1c510-bf10-11eb-bc89-45e8a108ed4e quote

