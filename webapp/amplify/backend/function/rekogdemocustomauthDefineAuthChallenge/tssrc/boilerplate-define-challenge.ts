/* eslint-disable @typescript-eslint/naming-convention */
import { DefineAuthChallengeTriggerEvent, DefineAuthChallengeTriggerHandler } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { GetItemInput, GetItemOutput } from 'aws-sdk/clients/dynamodb';

const {
  API_REKOGDEMOGRAPHQL_USERINFOTABLE_NAME: tableName = ``
} = process.env;

const dbClient = new AWS.DynamoDB.DocumentClient();

export const handler: DefineAuthChallengeTriggerHandler = async (event: DefineAuthChallengeTriggerEvent) => {
  if (event.request.session.length === 1 && event.request.session[0].challengeName === 'SRP_A') {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'PASSWORD_VERIFIER';
  } else if (
    event.request.session.length === 2 &&
    event.request.session[1].challengeName === 'PASSWORD_VERIFIER' &&
    event.request.session[1].challengeResult === true
  ) {
    const key: any = {
      companyid: `Amazon`,
      userid: event.request.userAttributes.sub
    };
    const params: GetItemInput = {
      TableName: tableName,
      Key: key
    };
    console.log(`GetItemInput`, params);
    let userinfo: any;
    try {
      const result: GetItemOutput = await dbClient.get(params).promise();
      console.log(`GetItemOutput`, result);
      userinfo = result.Item;
    } catch (error) {
      console.error(`UserInfo error`, error);
    }
    if (userinfo) {
      event.response.issueTokens = false;
      event.response.failAuthentication = false;
      event.response.challengeName = 'CUSTOM_CHALLENGE';
    } else {
      console.log(`UserInfo not found for userid[${event.request.userAttributes.sub}]`);
      event.response.issueTokens = true;
      event.response.failAuthentication = false;
    }
  } else if (
    event.request.session.length === 3 &&
    event.request.session[2].challengeName === 'CUSTOM_CHALLENGE' &&
    event.request.session[2].challengeResult === true
  ) {
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else {
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }

  return event;
};
