import { CreateAuthChallengeTriggerEvent, CreateAuthChallengeTriggerHandler } from 'aws-lambda';
import { GetItemInput, GetItemOutput } from 'aws-sdk/clients/dynamodb';
import * as AWS from 'aws-sdk';

const {
  API_REKOGDEMOGRAPHQL_USERINFOTABLE_NAME: tableName = ``
} = process.env;

const dbClient = new AWS.DynamoDB.DocumentClient();

export const handler: CreateAuthChallengeTriggerHandler = async (event: CreateAuthChallengeTriggerEvent) => {
  if (event.request.session.length === 2 && event.request.challengeName === 'CUSTOM_CHALLENGE') {
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
      event.response.publicChallengeParameters = {
        trigger: '1',
        question: 'Is it safe?'
      };

      event.response.privateChallengeParameters = {};
      // event.response.privateChallengeParameters.answer = process.env.CHALLENGEANSWER || ``;
      event.response.privateChallengeParameters.answer = userinfo.faceid;
    } else {
      console.log(`UserInfo not found for userid[${event.request.userAttributes.sub}]`);
    }
  }
  return event;
};
