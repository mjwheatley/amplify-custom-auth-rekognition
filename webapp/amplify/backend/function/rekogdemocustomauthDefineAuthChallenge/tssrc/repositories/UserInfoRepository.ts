import { DynamoDbRepository } from './DynamoDbRepository';
import { IGet, ISave } from './IRepository';
import { IUserInfo, UserInfo } from '../models';

export interface IUserInfoRepository extends IGet<IUserInfo, string>, ISave<IUserInfo> {
}

export class UserInfoRepository extends DynamoDbRepository<IUserInfo>
  implements IUserInfoRepository {
  constructor() {
    super(process.env.API_REKOGDEMOGRAPHQL_USERINFOTABLE_NAME);
  }

  toDomainObject(dataObject: IUserInfo): IUserInfo {
    return new UserInfo(dataObject);
  }

  toDataObject(businessObject: UserInfo): IUserInfo {
    return JSON.parse(JSON.stringify(businessObject));
  }
}
