const axios = require('axios');
const settings = require('../../src/library/settings');

const resend = async (proc) => {
  const data = {
    name: 'Tiger Tax',
    email: 'ajo.fod@gmail.com',
    phone: 'testing email change',
    clid: 'from api_resend',
    config: 'test.resend',
  };
  try {
    const response = await axios({
      method: 'put',
      url: `${proc.env.ROOT}/price/resend/${proc.id}`,
      data,
    });
    return response.data;
  } catch (error) {
    // console.error('Failed to update.')
    // console.error(error)
  }
  return null;
};

resend({ env: settings[process.argv[2]], id: process.argv[3] });
