/* eslint-disable @typescript-eslint/naming-convention */
import { BasePostConfirmationTriggerEvent, PostConfirmationTriggerHandler } from 'aws-lambda';
import { CognitoUser } from './models';
import * as AWS from 'aws-sdk';
import { PutItemInput } from 'aws-sdk/clients/dynamodb';

const {
  API_REKOGDEMOGRAPHQL_COGNITOUSERTABLE_NAME: tableName = ``
} = process.env;

export const handler: PostConfirmationTriggerHandler = async (
  event: (BasePostConfirmationTriggerEvent<'PostConfirmation_ConfirmSignUp'> |
    BasePostConfirmationTriggerEvent<'PostConfirmation_ConfirmForgotPassword'>)) => {
  console.log(`PostConfirmation Event`, event);

  if (event.triggerSource === `PostConfirmation_ConfirmSignUp`) {
    const attributes = event.request.userAttributes as unknown as any;
    attributes.email_verified = true;
    attributes.preferred_username = attributes.email;

    if (attributes.sub) {
      const user = new CognitoUser(attributes);
      const dbClient = new AWS.DynamoDB.DocumentClient();
      const params: PutItemInput = {
        TableName: tableName,
        Item: JSON.parse(JSON.stringify(user))
      };
      await dbClient.put(params).promise();
    } else {
      // Nothing to do, the user's email ID is unknown
      console.log('Error: Nothing was written to DynamoDB');
    }
  }
  return event;
};
