const { EventBridgeClient, PutEventsCommand } = require('@aws-sdk/client-eventbridge');
const chance = require('chance').Chance();

const region = process.env.AWS_REGION;
const eventBridge = new EventBridgeClient({ region });


module.exports.handler = async (event) => {
    return {
        statusCode: 200,
    }
}