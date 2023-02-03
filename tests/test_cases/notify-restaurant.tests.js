const { init } = require('../steps/init');
const { we_invoke_notify_restaurant } = require('../steps/when');
const chance = require('chance').Chance();

const mockPutEvents = jest.fn();
const mockPublish = jest.fn();

jest.mock('@aws-sdk/client-eventbridge', () => ({
    EventBridgeClient: jest.fn(() => ({
        send: jest.fn()
    })),
    PutEventsCommand: mockPutEvents
}));

jest.mock('@aws-sdk/client-sns', () => ({
    SNSClient: jest.fn(() => ({
        send: jest.fn()
    })),
    PublishCommand: mockPublish
}));


describe(`When we invoke the POST /notify-restaurant endpoint`, () => {

});