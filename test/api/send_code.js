const axios = require('axios');
const settings = require('../../src/library/settings');

const data = {
  phone: '13239722137',
  clid: 'from sendcode',
  email: 'ajo.fod@gmail.com',
  config: 'from sending code',
};

const send = async (proc) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${proc.env.ROOT}/price/send_code/${proc.id}`,
      data,
    });
    return response.data;
  } catch (error) {
    // console.error(error)
  }
  return null;
};

send({ env: settings[process.argv[2]], id: process.argv[3] });
