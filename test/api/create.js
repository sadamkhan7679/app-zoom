const axios = require('axios');
const settings = require('../../src/library/settings');

const create = async (proc) => {
  const data = {
    name: 'BLue Shirt',
    email: 'ajo.fod@gmail.com',
    phone: '1.323.972.2137',
    clid: 'testing clide',
    config: 'test creation',
    server: 'gold',
  };
  try {
    // const url = `${settings.test.ROOT}/price`;
    const url = `${proc.env.ROOT}/price`;
    // console.log(url)
    await axios({
      method: 'options',
      url,
      data,
    });
    // console.log('Options Response Headers');
    // console.log(responseOptions.headers);

    const responsePost = await axios({
      method: 'post',
      url,
      data,
    });
    // console.log('Post Response Headers');
    // console.log(responsePost.headers);
    // console.log('Response Data');
    // console.log(responsePost.data);
    return responsePost.data;
  } catch (error) {
    // console.error(error)
    // console.log('After error response headers')
    // console.error(error.response.headers)
  }
  return 0;
};

create({ env: settings[process.argv[2]] });
