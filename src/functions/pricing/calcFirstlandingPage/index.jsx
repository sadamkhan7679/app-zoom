const calcFirstlandingPage = (charge, verifyCount) => {
    return charge ? verifyCount === 0 ? 'thank-you' : 'estimate' : 'more';
}

export default calcFirstlandingPage