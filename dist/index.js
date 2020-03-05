"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _core = require('@actions/core'); var _core2 = _interopRequireDefault(_core);
var _awssdk = require('aws-sdk'); var _awssdk2 = _interopRequireDefault(_awssdk);
// import github from "@actions/github";

_awssdk2.default.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAQHRRSO6JTAOIFSH6",
  secretAccessKey: "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"
});

//AKIAQHRRSO6JTAOIFSH6
//8ud7NHsYDGdl9b8NAght2Bc2SyM01MoQt/fA0z4L

async function run() {
  const params = {
    Message: "Esse é um teste" /* required */,
    PhoneNumber: "+5561981359421"
  };

  const publishTextPromise = new _awssdk2.default.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  publishTextPromise
    .then(function(data) {
      console.log("MessageID is " + data.MessageId);
    })
    .catch(function(err) {
      console.error(err, err.stack);
    });
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
