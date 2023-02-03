
const { init } = require('../steps/init');

describe(`Given an authenticated user`, () => {
    beforeAll(async () => await init());

    describe(`When we invoke the POST /orders endpoint`, () => {


            it(`Should return the order id`, async () => {

            });
    });

});