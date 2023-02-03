const fs = require("fs");
const URL = require('url');
const Mustache = require("mustache");
const aws4 = require('aws4');

const awsRegion = process.env.AWS_REGION;

module.exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=UTF-8'
    },
  }

  return response
}