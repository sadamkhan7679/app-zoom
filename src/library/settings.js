// ------- TEST ----------
module.exports = Object.freeze({
  test: {
    ROOT: 'https://api.opzoom.com/signups/test',
    PIXEL: 'https://api.opzoom.com/pix/test/view',
    ID: 'ea361100-a338-11eb-ae11-b9594af06753',
    // ID: 'fda2fc70-9425-11eb-b00c-e924f25e06dd',
    TABLE: 'opzoom-app-pricing-signups-test',
    // https://test-app.opzoom.com/cost-to-make-an-app/?id=1e6face0-a20a-11eb-ab17-bd16ab3a2717&mesg=get
  },
  dev: {
    // ROOT: 'https://et0qgrkso0.execute-api.us-east-1.amazonaws.comi/dev/price',
    ROOT: 'https://api.opzoom.com/signups/dev',
    PIXEL: 'https://api.opzoom.com/pix/dev/view',
    ID: '79b91990-a79d-11eb-867e-a52a4c28bf83',
    TABLE: 'opzoom-app-pricing-signups-dev',
  },
  sim: {
    ROOT: 'sim://signups',
  },
  app: {
    ROOT: 'http://localhost:8080/signups',
  },
});

