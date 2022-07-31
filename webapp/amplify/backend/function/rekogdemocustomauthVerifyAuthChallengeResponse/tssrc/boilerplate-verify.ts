import { VerifyAuthChallengeResponseTriggerEvent, VerifyAuthChallengeResponseTriggerHandler } from 'aws-lambda';
import https from 'https';
import { URL } from 'url';
import AWS, { Endpoint } from 'aws-sdk';

const {
  API_REKOGDEMOGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT: appsyncUrl = `fakeAppsyncUrl`,
  REGION: region = `us-east-1`
} = process.env;

const endpoint = new URL(appsyncUrl).hostname.toString();

type LoginuserQuery = {
  __typename: 'LoginUserResponse';
  Success?: boolean | null;
  Message?: string | null;
  Confidence?: number | null;
  CompanyId?: string | null;
  UserId?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  DOB?: string | null;
  RegistrationStatus?: string | null;
  FaceId?: string | null;
  FaceImage?: string | null;
};

const loginuser = async (imageDataBase64?: string): Promise<LoginuserQuery> => {
  const statement = `query Loginuser($imageDataBase64: String) {
        loginuser(imageDataBase64: $imageDataBase64) {
          __typename
          Success
          Message
          Confidence
          CompanyId
          UserId
          FirstName
          LastName
          DOB
          RegistrationStatus
          FaceId
          FaceImage
        }
      }`;
  const req = new AWS.HttpRequest(new Endpoint(appsyncUrl), region);
  req.method = 'POST';
  req.path = '/graphql';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify({
    query: statement,
    operationName: 'Loginuser',
    variables: { imageDataBase64 }
  });
  // @ts-ignore
  const signer = new AWS.Signers.V4(req, 'appsync', true);
  // @ts-ignore
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  return await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      let data = '';

      result.on('data', (chunk) => {
        data += chunk;
      });

      result.on('end', () => {
        resolve(JSON.parse(data.toString()));
      });

      result.on('error', (error) => {
        reject(error);
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });
};

export const handler: VerifyAuthChallengeResponseTriggerHandler = async (event: VerifyAuthChallengeResponseTriggerEvent) => {
  const { challengeAnswer, privateChallengeParameters: { answer } } = event.request;
  const loginUserResult: any = await loginuser(challengeAnswer);
  console.log(`loginUserResult`, loginUserResult);
  const { loginUser }: { loginUser: LoginuserQuery } = loginUserResult.data;
  const {
    Success,
    Confidence,
    FaceId
  } = loginUser;
  const confidence = Confidence || 0;
  event.response.answerCorrect = !!(Success && confidence > .9 && answer === FaceId);
  return event;
};
