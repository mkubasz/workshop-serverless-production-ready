const { init } = require('../steps/init');

describe(`When we invoke the GET / restaurants endpoint`, () => {
  beforeAll(async () => await init());

    it(`Should return an array of 8 restaurants`, async () => {
    });
});