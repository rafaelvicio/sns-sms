"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _core = require('@actions/core'); var _core2 = _interopRequireDefault(_core);
var _awssdk = require('aws-sdk'); var _awssdk2 = _interopRequireDefault(_awssdk);

const AWS_REGION = _core2.default.getInput("AWS_REGION") || process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID =
  _core2.default.getInput("AWS_ACCESS_KEY_ID") || process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY =
  _core2.default.getInput("AWS_SECRET_ACCESS_KEY") || process.env.AWS_SECRET_ACCESS_KEY;

_awssdk2.default.config.update({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});

async function run() {
  const FROM_PHONE_NUMBER = _core2.default.getInput("FROM_PHONE_NUMBER");
  const SMS_TEXT_CONTENT = _core2.default.getInput("SMS_TEXT_CONTENT");

  const params = {
    PhoneNumber: FROM_PHONE_NUMBER,
    Message: SMS_TEXT_CONTENT
  };

  const publishTextPromise = new _awssdk2.default.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  _core2.default.debug("Sending SMS");

  const result = await publishTextPromise();

  const messageID = 1;

  _core2.default.debug("SMS sent!");

  return messageID;
}

async function execute() {
  try {
    return await run();
  } catch (error) {
    _core2.default.error("Failed to send message", message);
    _core2.default.setFailed(message);
  }
}

exports. default = execute;

execute();
