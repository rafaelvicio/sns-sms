# SNS SMS GitHub Action

Send an SMS from GitHub Actions.

## Prerequisites

- A AWS Account. [Sign up for free](https://aws.amazon.com)
- A [A AmazonSNS User](https://aws.amazon.com/pt/iam/)

## Usage

1. Set up your credentials as secrets in your repository settings using `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `FROM_PHONE_NUMBER`, `SMS_TEXT_CONTENT`

2. Add the following to your workflow

```yml
- name: "Sending SMS Notification"
  uses: rafaelvicio/sns-sms@1.0.1
  with:
    FROM_PHONE_NUMBER: "+5561123456789"
    SMS_TEXT_CONTENT: "Hello from AWS SNS"
  env:
    AWS_REGION: ${{ secrets.AWS_REGION }}
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## Inputs

### `FROM_PHONE_NUMBER`

**Required** Phone number to send the SMS to

### `SMS_TEXT_CONTENT`

**Required** The message you want to send

### `AWS_REGION`

A AWS Region. Can alternatively be stored in environment

### `AWS_ACCESS_KEY_ID`

A AWS Access Key ID. Can alternatively be stored in environment

### `AWS_SECRET_ACCESS_KEY`

A AWS Secret Access Key. Can alternatively be stored in environment

## Outputs

### `MessageId`

The SID of the [message resource](https://docs.aws.amazon.com/pt_br/sns/latest/dg/sns-msg-status.html) associated with the SMS sent.

## Contributing

## Third Party Licenses

This GitHub Action uses a couple of Node.js modules to work.

License and other copyright information for each module are included in the release branch of each action version under `node_modules/{module}`.

More information for each package can be found at `https://www.npmjs.com/package/{package}`

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
