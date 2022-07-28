export interface IUserInfo {
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string;
  faceid?: string;
  description?: string;
}

export interface IUserInfoParams {
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string;
  faceid?: string;
  description?: string;
}

export class UserInfo implements IUserInfo {
  public __typename?: string = `UserInfo`;
  companyid: string = ``;
  userid: string = ``;
  firstname: string = ``;
  lastname: string = ``;
  dob: string = ``;
  registrationstatus: string = ``;
  faceimage?: string;
  faceid?: string;
  description?: string;

  constructor(model?: IUserInfoParams) {
    this.companyid = model?.companyid || this.companyid;
    this.userid = model?.userid || this.userid;
    this.firstname = model?.firstname || this.firstname;
    this.lastname = model?.lastname || this.lastname;
    this.dob = model?.dob || this.dob;
    this.registrationstatus = model?.registrationstatus || this.registrationstatus;
    this.faceimage = model?.faceimage;
    this.faceid = model?.faceid;
    this.description = model?.description;
  }
}
