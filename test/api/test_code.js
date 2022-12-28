const axios = require('axios');
const settings = require('../../src/library/settings');

const send = async (proc) => {
  const data = {
    code: '392',
    id: proc.id,
    email: 'ajo.fod@gmail.com',
    phone: '13239722137',
    clid: 'from update',
    config: 'test.api_update.js',
  };
  try {
    const response = await axios({
      method: 'put',
      url: `${proc.env.ROOT}/price/test_code/${proc.id}`,
      data,
    });
    return response.data;
  } catch (error) {
    // console.error(error)
  }
  return null;
};

send({ env: settings[process.argv[2]], id: process.argv[3] });
