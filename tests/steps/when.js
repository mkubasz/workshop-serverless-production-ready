const aws4 = require('aws4');
const URL = require('url');
const _ = require('lodash');
const APP_ROOT = '../../';

const mode = process.env.TEST_MODE;

const viaHttp = async (path, method, opts) => {

};

const viaHandler = async (event, functionName) => {

}

const we_invoke_example = async () =>
{
    switch (mode) {
        case 'handler':
            return await viaHandler({}, 'example');
        case 'http':
            return await viaHttp('', 'get');
        default:
            throw new Error(`Invalid mode: ${mode}`);
    }
}


module.exports = {
    we_invoke_example,
}