import core from "@actions/core";
import AWS from "aws-sdk";

const AWS_REGION = core.getInput("AWS_REGION") || process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID =
  core.getInput("AWS_ACCESS_KEY_ID") || process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY =
  core.getInput("AWS_SECRET_ACCESS_KEY") || process.env.AWS_SECRET_ACCESS_KEY;

AWS.config.update({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});

async function run() {
  const FROM_PHONE_NUMBER = core.getInput("FROM_PHONE_NUMBER");
  const SMS_TEXT_CONTENT = core.getInput("SMS_TEXT_CONTENT");

  const params = {
    PhoneNumber: FROM_PHONE_NUMBER,
    Message: SMS_TEXT_CONTENT
  };

  const publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  core.debug("Sending SMS");

  const { MessageId } = await publishTextPromise();

  core.debug("SMS sent!");

  return MessageId;
}

async function execute() {
  try {
    return await run();
  } catch (error) {
    core.error("Failed to send message", message);
    core.setFailed(message);
  }
}

export default execute;

execute();
