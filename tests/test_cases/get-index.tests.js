const cheerio = require('cheerio');
const when = require('../steps/when');
const {init} = require("../steps/init");

describe(`When we invoke the GET / endpoint`, () => {
  beforeAll(async () => await init());

  it(`Should return the index page with 8 restaurants`, async () => {

  });
});