const { EventBridgeClient, PutEventsCommand } = require('@aws-sdk/client-eventbridge');
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

const region = process.env.AWS_REGION;
const eventBridge = new EventBridgeClient({ region });
const sns = new SNSClient({ region });

module.exports.handler = async (event) => {
};