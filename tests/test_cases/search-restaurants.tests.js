
const { init } = require('../steps/init');


describe(`When we invoke the GET /restaurants/search endpoint with the keyword 'cartoon'`, () => {
    beforeAll(async () => {
        await init();
    });

    afterAll(async () => {
    });

    it(`Should return an array of 4 restaurants`, async () => {

    });
});