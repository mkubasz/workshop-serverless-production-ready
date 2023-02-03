const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
const middy = require('@middy/core');
const ssm = require('@middy/ssm');

const region = process.env.AWS_REGION;
const { serviceName, stage } = process.env;
const dynamoDb = new DynamoDBClient({ region });


module.exports.handler = async (event, context) => {
    const response = {
        statusCode: 200,
    };
    return response;
};