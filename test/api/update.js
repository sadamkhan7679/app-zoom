const axios = require('axios');
const settings = require('../../src/library/settings');

// const code = {
//     'tsView_fundingBenefit': 1619476969074,
//     'tsUnsubscribe': 0,
//     'charge': 'ch_1IiefKLIlFQ5iBm6VIX5IdI4',
//     'email': 'ajo.fod@gmail.com',
//     'tsView_test': 1619458611799,
//     'name': 'Ajo Blue',
//     'sentMail': [],
//     'debtAnnounceCount': 1,
//     'code': '392',
//     'getCount': 6,
//     'tsNextEmail': 1621035505574,
//     'testCount': 1,
//     'id': '6b438d50-a298-11eb-bc7a-bdc1c3e2ab68',
//     'phone': 'phone.UP',
//     'config': {
//         'answers': {
//             'development': 'yes',
//             'funding': 'yes',
//             'signupGreeting': 'updated',
//             'level-of-detail': 'bare-bones',
//             'technology': 'no',
//             'login': 'yes',
//             'platforms': [
//                 'web',
//                 'ios',
//                 'android'
//             ],
//             'marketing': 'yes',
//             'features': 'yes',
//             'fundingType': {
//                 'equity': true,
//                 'debt': true,
//                 'rsp': true,
//                 'others': false
//             },
//             'design': 'none',
//             'name': 'name',
//             'context': 'personal'
//         },
//         'emails': [],
//         'estimate': '$10,000.00',
//         'optionalInfo': {
//             'marketing': false,
//             'funding': false,
//             'add-features': false
//         },
//         'linkCount': 1
//     },
//     'fundingbenefitCount': 1,
//     'createdAt': 1619006108305,
//     'source': 'tok_1IiefFLIlFQ5iBm6DZooDWAl',
//     'tsView_fundingbenefit': 1619450809056,
//     'server': 'https://asad-app.opzoom.com',
//     'verifyCount': 1,
//     'updatedAt': 1619732696172,
//     'amount': 2900,
//     'clid': {
//         'white': 'tiger'
//     },
//     'description': 'Application Fee'
// }

const data = {
  id: 'f3248ec0-b4e2-11eb-bbdb-f3adc58e321a',
  monthly_fee: 200,
};

const update = async (proc) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${proc.env.ROOT}/price/update/${proc.id}`,
      data,
    });
    return response.data;
  } catch (error) {
    // console.error('Failed to update.')
    // console.error(error)
  }
  return null;
};

update({ env: settings[process.argv[2]], id: process.argv[3] });
