/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCognitoUser: OnCreateCognitoUserSubscription;
  onUpdateCognitoUser: OnUpdateCognitoUserSubscription;
  onDeleteCognitoUser: OnDeleteCognitoUserSubscription;
  onCreateUserInfo: OnCreateUserInfoSubscription;
  onUpdateUserInfo: OnUpdateUserInfoSubscription;
  onDeleteUserInfo: OnDeleteUserInfoSubscription;
  onCreateConfigEntry: OnCreateConfigEntrySubscription;
  onUpdateConfigEntry: OnUpdateConfigEntrySubscription;
  onDeleteConfigEntry: OnDeleteConfigEntrySubscription;
  onCreateCachedCollectionList: OnCreateCachedCollectionListSubscription;
  onUpdateCachedCollectionList: OnUpdateCachedCollectionListSubscription;
  onDeleteCachedCollectionList: OnDeleteCachedCollectionListSubscription;
};

export type CreateCollectionResponse = {
  __typename: "CreateCollectionResponse";
  CollectionId?: string | null;
  Arn?: string | null;
  Success?: boolean | null;
  Message?: string | null;
};

export type DeleteCollectionResponse = {
  __typename: "DeleteCollectionResponse";
  CollectionId?: string | null;
  Success?: boolean | null;
  Message?: string | null;
};

export type RegisterNewUserResponse = {
  __typename: "RegisterNewUserResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
  RegistrationStatus?: string | null;
};

export type UpdateUserPhotoResponse = {
  __typename: "UpdateUserPhotoResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
};

export type DeleteUserResponse = {
  __typename: "DeleteUserResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  DOB?: string | null;
};

export type CreateCognitoUserInput = {
  id?: string | null;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
};

export type ModelCognitoUserConditionInput = {
  address?: ModelStringInput | null;
  birthdate?: ModelStringInput | null;
  email?: ModelStringInput | null;
  email_verified?: ModelBooleanInput | null;
  family_name?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  given_name?: ModelStringInput | null;
  locale?: ModelStringInput | null;
  middle_name?: ModelStringInput | null;
  name?: ModelStringInput | null;
  nickname?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  preferred_username?: ModelStringInput | null;
  profile?: ModelStringInput | null;
  zoneinfo?: ModelStringInput | null;
  updated_at?: ModelStringInput | null;
  website?: ModelStringInput | null;
  sub?: ModelStringInput | null;
  and?: Array<ModelCognitoUserConditionInput | null> | null;
  or?: Array<ModelCognitoUserConditionInput | null> | null;
  not?: ModelCognitoUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type CognitoUser = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCognitoUserInput = {
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email?: string | null;
  email_verified?: boolean | null;
  family_name?: string | null;
  gender?: string | null;
  given_name?: string | null;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
};

export type DeleteCognitoUserInput = {
  id: string;
};

export type CreateUserInfoInput = {
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
};

export type ModelUserInfoConditionInput = {
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  registrationstatus?: ModelStringInput | null;
  faceimage?: ModelStringInput | null;
  faceid?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelUserInfoConditionInput | null> | null;
  or?: Array<ModelUserInfoConditionInput | null> | null;
  not?: ModelUserInfoConditionInput | null;
};

export type UserInfo = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInfoInput = {
  companyid: string;
  userid: string;
  firstname?: string | null;
  lastname?: string | null;
  dob?: string | null;
  registrationstatus?: string | null;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
};

export type DeleteUserInfoInput = {
  companyid: string;
  userid: string;
};

export type CreateConfigEntryInput = {
  configroot: string;
  configid: string;
  value: string;
};

export type ModelConfigEntryConditionInput = {
  value?: ModelStringInput | null;
  and?: Array<ModelConfigEntryConditionInput | null> | null;
  or?: Array<ModelConfigEntryConditionInput | null> | null;
  not?: ModelConfigEntryConditionInput | null;
};

export type ConfigEntry = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateConfigEntryInput = {
  configroot: string;
  configid: string;
  value?: string | null;
};

export type DeleteConfigEntryInput = {
  configroot: string;
  configid: string;
};

export type CreateCachedCollectionListInput = {
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
};

export type ModelCachedCollectionListConditionInput = {
  arn?: ModelStringInput | null;
  created?: ModelStringInput | null;
  facemodel?: ModelStringInput | null;
  and?: Array<ModelCachedCollectionListConditionInput | null> | null;
  or?: Array<ModelCachedCollectionListConditionInput | null> | null;
  not?: ModelCachedCollectionListConditionInput | null;
};

export type CachedCollectionList = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCachedCollectionListInput = {
  configroot: string;
  collectionid: string;
  arn?: string | null;
  created?: string | null;
  facemodel?: string | null;
};

export type DeleteCachedCollectionListInput = {
  configroot: string;
  collectionid: string;
};

export type CollectionResponse = {
  __typename: "CollectionResponse";
  CollectionId?: string | null;
  Arn?: string | null;
};

export type DescribeCollectionResponse = {
  __typename: "DescribeCollectionResponse";
  FaceCount?: number | null;
  FaceModelVersion?: string | null;
  CollectionARN?: string | null;
  CreationTimestamp?: string | null;
  CollectionId?: string | null;
};

export type LoginUserResponse = {
  __typename: "LoginUserResponse";
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

export type DetectTextResponse = {
  __typename: "DetectTextResponse";
  Success?: boolean | null;
  Message?: string | null;
  DetectedText?: Array<string | null> | null;
};

export type ModelCognitoUserFilterInput = {
  id?: ModelIDInput | null;
  address?: ModelStringInput | null;
  birthdate?: ModelStringInput | null;
  email?: ModelStringInput | null;
  email_verified?: ModelBooleanInput | null;
  family_name?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  given_name?: ModelStringInput | null;
  locale?: ModelStringInput | null;
  middle_name?: ModelStringInput | null;
  name?: ModelStringInput | null;
  nickname?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  preferred_username?: ModelStringInput | null;
  profile?: ModelStringInput | null;
  zoneinfo?: ModelStringInput | null;
  updated_at?: ModelStringInput | null;
  website?: ModelStringInput | null;
  sub?: ModelStringInput | null;
  and?: Array<ModelCognitoUserFilterInput | null> | null;
  or?: Array<ModelCognitoUserFilterInput | null> | null;
  not?: ModelCognitoUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCognitoUserConnection = {
  __typename: "ModelCognitoUserConnection";
  items: Array<CognitoUser | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelUserInfoFilterInput = {
  companyid?: ModelStringInput | null;
  userid?: ModelStringInput | null;
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  registrationstatus?: ModelStringInput | null;
  faceimage?: ModelStringInput | null;
  faceid?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelUserInfoFilterInput | null> | null;
  or?: Array<ModelUserInfoFilterInput | null> | null;
  not?: ModelUserInfoFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection";
  items: Array<UserInfo | null>;
  nextToken?: string | null;
};

export type ModelConfigEntryFilterInput = {
  configroot?: ModelStringInput | null;
  configid?: ModelStringInput | null;
  value?: ModelStringInput | null;
  and?: Array<ModelConfigEntryFilterInput | null> | null;
  or?: Array<ModelConfigEntryFilterInput | null> | null;
  not?: ModelConfigEntryFilterInput | null;
};

export type ModelConfigEntryConnection = {
  __typename: "ModelConfigEntryConnection";
  items: Array<ConfigEntry | null>;
  nextToken?: string | null;
};

export type ModelCachedCollectionListFilterInput = {
  configroot?: ModelStringInput | null;
  collectionid?: ModelStringInput | null;
  arn?: ModelStringInput | null;
  created?: ModelStringInput | null;
  facemodel?: ModelStringInput | null;
  and?: Array<ModelCachedCollectionListFilterInput | null> | null;
  or?: Array<ModelCachedCollectionListFilterInput | null> | null;
  not?: ModelCachedCollectionListFilterInput | null;
};

export type ModelCachedCollectionListConnection = {
  __typename: "ModelCachedCollectionListConnection";
  items: Array<CachedCollectionList | null>;
  nextToken?: string | null;
};

export type CreatecollectionMutation = {
  __typename: "CreateCollectionResponse";
  CollectionId?: string | null;
  Arn?: string | null;
  Success?: boolean | null;
  Message?: string | null;
};

export type DeletecollectionMutation = {
  __typename: "DeleteCollectionResponse";
  CollectionId?: string | null;
  Success?: boolean | null;
  Message?: string | null;
};

export type RegisternewuserMutation = {
  __typename: "RegisterNewUserResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
  RegistrationStatus?: string | null;
};

export type RegisternewuserwithidcardMutation = {
  __typename: "RegisterNewUserResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
  RegistrationStatus?: string | null;
};

export type UpdateexistinguserphotoMutation = {
  __typename: "UpdateUserPhotoResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
};

export type DeleteuserMutation = {
  __typename: "DeleteUserResponse";
  Success?: boolean | null;
  Message?: string | null;
  CompanyId?: string | null;
  UserId?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  DOB?: string | null;
};

export type CreateCognitoUserMutation = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCognitoUserMutation = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCognitoUserMutation = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserInfoMutation = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInfoMutation = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserInfoMutation = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateConfigEntryMutation = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateConfigEntryMutation = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteConfigEntryMutation = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCachedCollectionListMutation = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCachedCollectionListMutation = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCachedCollectionListMutation = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type ListcollectionsQuery = {
  __typename: "CollectionResponse";
  CollectionId?: string | null;
  Arn?: string | null;
};

export type DescribecollectionQuery = {
  __typename: "DescribeCollectionResponse";
  FaceCount?: number | null;
  FaceModelVersion?: string | null;
  CollectionARN?: string | null;
  CreationTimestamp?: string | null;
  CollectionId?: string | null;
};

export type LoginuserQuery = {
  __typename: "LoginUserResponse";
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

export type DetecttextinidcardQuery = {
  __typename: "DetectTextResponse";
  Success?: boolean | null;
  Message?: string | null;
  DetectedText?: Array<string | null> | null;
};

export type GetCognitoUserQuery = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCognitoUsersQuery = {
  __typename: "ModelCognitoUserConnection";
  items: Array<{
    __typename: "CognitoUser";
    id: string;
    address?: string | null;
    birthdate?: string | null;
    email: string;
    email_verified?: boolean | null;
    family_name: string;
    gender?: string | null;
    given_name: string;
    locale?: string | null;
    middle_name?: string | null;
    name?: string | null;
    nickname?: string | null;
    phone_number?: string | null;
    picture?: string | null;
    preferred_username?: string | null;
    profile?: string | null;
    zoneinfo?: string | null;
    updated_at?: string | null;
    website?: string | null;
    sub?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserInfoQuery = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUserInfosQuery = {
  __typename: "ModelUserInfoConnection";
  items: Array<{
    __typename: "UserInfo";
    companyid: string;
    userid: string;
    firstname: string;
    lastname: string;
    dob: string;
    registrationstatus: string;
    faceimage?: string | null;
    faceid?: string | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type UserInfoByFaceIdQuery = {
  __typename: "ModelUserInfoConnection";
  items: Array<{
    __typename: "UserInfo";
    companyid: string;
    userid: string;
    firstname: string;
    lastname: string;
    dob: string;
    registrationstatus: string;
    faceimage?: string | null;
    faceid?: string | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type UserInfoByRegStatusQuery = {
  __typename: "ModelUserInfoConnection";
  items: Array<{
    __typename: "UserInfo";
    companyid: string;
    userid: string;
    firstname: string;
    lastname: string;
    dob: string;
    registrationstatus: string;
    faceimage?: string | null;
    faceid?: string | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetConfigEntryQuery = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type ListConfigEntriesQuery = {
  __typename: "ModelConfigEntryConnection";
  items: Array<{
    __typename: "ConfigEntry";
    configroot: string;
    configid: string;
    value: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCachedCollectionListQuery = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCachedCollectionListsQuery = {
  __typename: "ModelCachedCollectionListConnection";
  items: Array<{
    __typename: "CachedCollectionList";
    configroot: string;
    collectionid: string;
    arn: string;
    created: string;
    facemodel: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateCognitoUserSubscription = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCognitoUserSubscription = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCognitoUserSubscription = {
  __typename: "CognitoUser";
  id: string;
  address?: string | null;
  birthdate?: string | null;
  email: string;
  email_verified?: boolean | null;
  family_name: string;
  gender?: string | null;
  given_name: string;
  locale?: string | null;
  middle_name?: string | null;
  name?: string | null;
  nickname?: string | null;
  phone_number?: string | null;
  picture?: string | null;
  preferred_username?: string | null;
  profile?: string | null;
  zoneinfo?: string | null;
  updated_at?: string | null;
  website?: string | null;
  sub?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserInfoSubscription = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserInfoSubscription = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserInfoSubscription = {
  __typename: "UserInfo";
  companyid: string;
  userid: string;
  firstname: string;
  lastname: string;
  dob: string;
  registrationstatus: string;
  faceimage?: string | null;
  faceid?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateConfigEntrySubscription = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateConfigEntrySubscription = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteConfigEntrySubscription = {
  __typename: "ConfigEntry";
  configroot: string;
  configid: string;
  value: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCachedCollectionListSubscription = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCachedCollectionListSubscription = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCachedCollectionListSubscription = {
  __typename: "CachedCollectionList";
  configroot: string;
  collectionid: string;
  arn: string;
  created: string;
  facemodel: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async Createcollection(
    collectionId?: string
  ): Promise<CreatecollectionMutation> {
    const statement = `mutation Createcollection($collectionId: String) {
        createcollection(collectionId: $collectionId) {
          __typename
          CollectionId
          Arn
          Success
          Message
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (collectionId) {
      gqlAPIServiceArguments.collectionId = collectionId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatecollectionMutation>response.data.createcollection;
  }
  async Deletecollection(
    collectionId?: string
  ): Promise<DeletecollectionMutation> {
    const statement = `mutation Deletecollection($collectionId: String) {
        deletecollection(collectionId: $collectionId) {
          __typename
          CollectionId
          Success
          Message
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (collectionId) {
      gqlAPIServiceArguments.collectionId = collectionId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletecollectionMutation>response.data.deletecollection;
  }
  async Registernewuser(
    userInfoAsJson?: string
  ): Promise<RegisternewuserMutation> {
    const statement = `mutation Registernewuser($userInfoAsJson: String) {
        registernewuser(userInfoAsJson: $userInfoAsJson) {
          __typename
          Success
          Message
          CompanyId
          UserId
          RegistrationStatus
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userInfoAsJson) {
      gqlAPIServiceArguments.userInfoAsJson = userInfoAsJson;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RegisternewuserMutation>response.data.registernewuser;
  }
  async Registernewuserwithidcard(
    userInfoAsJson?: string,
    faceImageDataBase64?: string,
    idImageDataBase64?: string
  ): Promise<RegisternewuserwithidcardMutation> {
    const statement = `mutation Registernewuserwithidcard($userInfoAsJson: String, $faceImageDataBase64: String, $idImageDataBase64: String) {
        registernewuserwithidcard(userInfoAsJson: $userInfoAsJson, faceImageDataBase64: $faceImageDataBase64, idImageDataBase64: $idImageDataBase64) {
          __typename
          Success
          Message
          CompanyId
          UserId
          RegistrationStatus
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userInfoAsJson) {
      gqlAPIServiceArguments.userInfoAsJson = userInfoAsJson;
    }
    if (faceImageDataBase64) {
      gqlAPIServiceArguments.faceImageDataBase64 = faceImageDataBase64;
    }
    if (idImageDataBase64) {
      gqlAPIServiceArguments.idImageDataBase64 = idImageDataBase64;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RegisternewuserwithidcardMutation>(
      response.data.registernewuserwithidcard
    );
  }
  async Updateexistinguserphoto(
    userInfoAsJson?: string,
    faceImageDataBase64?: string
  ): Promise<UpdateexistinguserphotoMutation> {
    const statement = `mutation Updateexistinguserphoto($userInfoAsJson: String, $faceImageDataBase64: String) {
        updateexistinguserphoto(userInfoAsJson: $userInfoAsJson, faceImageDataBase64: $faceImageDataBase64) {
          __typename
          Success
          Message
          CompanyId
          UserId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userInfoAsJson) {
      gqlAPIServiceArguments.userInfoAsJson = userInfoAsJson;
    }
    if (faceImageDataBase64) {
      gqlAPIServiceArguments.faceImageDataBase64 = faceImageDataBase64;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateexistinguserphotoMutation>(
      response.data.updateexistinguserphoto
    );
  }
  async Deleteuser(userInfoAsJson?: string): Promise<DeleteuserMutation> {
    const statement = `mutation Deleteuser($userInfoAsJson: String) {
        deleteuser(userInfoAsJson: $userInfoAsJson) {
          __typename
          Success
          Message
          CompanyId
          UserId
          FirstName
          LastName
          DOB
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userInfoAsJson) {
      gqlAPIServiceArguments.userInfoAsJson = userInfoAsJson;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteuserMutation>response.data.deleteuser;
  }
  async CreateCognitoUser(
    input: CreateCognitoUserInput,
    condition?: ModelCognitoUserConditionInput
  ): Promise<CreateCognitoUserMutation> {
    const statement = `mutation CreateCognitoUser($input: CreateCognitoUserInput!, $condition: ModelCognitoUserConditionInput) {
        createCognitoUser(input: $input, condition: $condition) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCognitoUserMutation>response.data.createCognitoUser;
  }
  async UpdateCognitoUser(
    input: UpdateCognitoUserInput,
    condition?: ModelCognitoUserConditionInput
  ): Promise<UpdateCognitoUserMutation> {
    const statement = `mutation UpdateCognitoUser($input: UpdateCognitoUserInput!, $condition: ModelCognitoUserConditionInput) {
        updateCognitoUser(input: $input, condition: $condition) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCognitoUserMutation>response.data.updateCognitoUser;
  }
  async DeleteCognitoUser(
    input: DeleteCognitoUserInput,
    condition?: ModelCognitoUserConditionInput
  ): Promise<DeleteCognitoUserMutation> {
    const statement = `mutation DeleteCognitoUser($input: DeleteCognitoUserInput!, $condition: ModelCognitoUserConditionInput) {
        deleteCognitoUser(input: $input, condition: $condition) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCognitoUserMutation>response.data.deleteCognitoUser;
  }
  async CreateUserInfo(
    input: CreateUserInfoInput,
    condition?: ModelUserInfoConditionInput
  ): Promise<CreateUserInfoMutation> {
    const statement = `mutation CreateUserInfo($input: CreateUserInfoInput!, $condition: ModelUserInfoConditionInput) {
        createUserInfo(input: $input, condition: $condition) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserInfoMutation>response.data.createUserInfo;
  }
  async UpdateUserInfo(
    input: UpdateUserInfoInput,
    condition?: ModelUserInfoConditionInput
  ): Promise<UpdateUserInfoMutation> {
    const statement = `mutation UpdateUserInfo($input: UpdateUserInfoInput!, $condition: ModelUserInfoConditionInput) {
        updateUserInfo(input: $input, condition: $condition) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserInfoMutation>response.data.updateUserInfo;
  }
  async DeleteUserInfo(
    input: DeleteUserInfoInput,
    condition?: ModelUserInfoConditionInput
  ): Promise<DeleteUserInfoMutation> {
    const statement = `mutation DeleteUserInfo($input: DeleteUserInfoInput!, $condition: ModelUserInfoConditionInput) {
        deleteUserInfo(input: $input, condition: $condition) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserInfoMutation>response.data.deleteUserInfo;
  }
  async CreateConfigEntry(
    input: CreateConfigEntryInput,
    condition?: ModelConfigEntryConditionInput
  ): Promise<CreateConfigEntryMutation> {
    const statement = `mutation CreateConfigEntry($input: CreateConfigEntryInput!, $condition: ModelConfigEntryConditionInput) {
        createConfigEntry(input: $input, condition: $condition) {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConfigEntryMutation>response.data.createConfigEntry;
  }
  async UpdateConfigEntry(
    input: UpdateConfigEntryInput,
    condition?: ModelConfigEntryConditionInput
  ): Promise<UpdateConfigEntryMutation> {
    const statement = `mutation UpdateConfigEntry($input: UpdateConfigEntryInput!, $condition: ModelConfigEntryConditionInput) {
        updateConfigEntry(input: $input, condition: $condition) {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConfigEntryMutation>response.data.updateConfigEntry;
  }
  async DeleteConfigEntry(
    input: DeleteConfigEntryInput,
    condition?: ModelConfigEntryConditionInput
  ): Promise<DeleteConfigEntryMutation> {
    const statement = `mutation DeleteConfigEntry($input: DeleteConfigEntryInput!, $condition: ModelConfigEntryConditionInput) {
        deleteConfigEntry(input: $input, condition: $condition) {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConfigEntryMutation>response.data.deleteConfigEntry;
  }
  async CreateCachedCollectionList(
    input: CreateCachedCollectionListInput,
    condition?: ModelCachedCollectionListConditionInput
  ): Promise<CreateCachedCollectionListMutation> {
    const statement = `mutation CreateCachedCollectionList($input: CreateCachedCollectionListInput!, $condition: ModelCachedCollectionListConditionInput) {
        createCachedCollectionList(input: $input, condition: $condition) {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCachedCollectionListMutation>(
      response.data.createCachedCollectionList
    );
  }
  async UpdateCachedCollectionList(
    input: UpdateCachedCollectionListInput,
    condition?: ModelCachedCollectionListConditionInput
  ): Promise<UpdateCachedCollectionListMutation> {
    const statement = `mutation UpdateCachedCollectionList($input: UpdateCachedCollectionListInput!, $condition: ModelCachedCollectionListConditionInput) {
        updateCachedCollectionList(input: $input, condition: $condition) {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCachedCollectionListMutation>(
      response.data.updateCachedCollectionList
    );
  }
  async DeleteCachedCollectionList(
    input: DeleteCachedCollectionListInput,
    condition?: ModelCachedCollectionListConditionInput
  ): Promise<DeleteCachedCollectionListMutation> {
    const statement = `mutation DeleteCachedCollectionList($input: DeleteCachedCollectionListInput!, $condition: ModelCachedCollectionListConditionInput) {
        deleteCachedCollectionList(input: $input, condition: $condition) {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCachedCollectionListMutation>(
      response.data.deleteCachedCollectionList
    );
  }
  async Listcollections(param?: string): Promise<Array<ListcollectionsQuery>> {
    const statement = `query Listcollections($param: String) {
        listcollections(param: $param) {
          __typename
          CollectionId
          Arn
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (param) {
      gqlAPIServiceArguments.param = param;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListcollectionsQuery>>response.data.listcollections;
  }
  async Describecollection(
    collectionId?: string
  ): Promise<DescribecollectionQuery> {
    const statement = `query Describecollection($collectionId: String) {
        describecollection(collectionId: $collectionId) {
          __typename
          FaceCount
          FaceModelVersion
          CollectionARN
          CreationTimestamp
          CollectionId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (collectionId) {
      gqlAPIServiceArguments.collectionId = collectionId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DescribecollectionQuery>response.data.describecollection;
  }
  async Loginuser(imageDataBase64?: string): Promise<LoginuserQuery> {
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
    const gqlAPIServiceArguments: any = {};
    if (imageDataBase64) {
      gqlAPIServiceArguments.imageDataBase64 = imageDataBase64;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <LoginuserQuery>response.data.loginuser;
  }
  async Detecttextinidcard(
    imageDataBase64?: string
  ): Promise<DetecttextinidcardQuery> {
    const statement = `query Detecttextinidcard($imageDataBase64: String) {
        detecttextinidcard(imageDataBase64: $imageDataBase64) {
          __typename
          Success
          Message
          DetectedText
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (imageDataBase64) {
      gqlAPIServiceArguments.imageDataBase64 = imageDataBase64;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DetecttextinidcardQuery>response.data.detecttextinidcard;
  }
  async GetCognitoUser(id: string): Promise<GetCognitoUserQuery> {
    const statement = `query GetCognitoUser($id: ID!) {
        getCognitoUser(id: $id) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCognitoUserQuery>response.data.getCognitoUser;
  }
  async ListCognitoUsers(
    filter?: ModelCognitoUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCognitoUsersQuery> {
    const statement = `query ListCognitoUsers($filter: ModelCognitoUserFilterInput, $limit: Int, $nextToken: String) {
        listCognitoUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            address
            birthdate
            email
            email_verified
            family_name
            gender
            given_name
            locale
            middle_name
            name
            nickname
            phone_number
            picture
            preferred_username
            profile
            zoneinfo
            updated_at
            website
            sub
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCognitoUsersQuery>response.data.listCognitoUsers;
  }
  async GetUserInfo(
    companyid: string,
    userid: string
  ): Promise<GetUserInfoQuery> {
    const statement = `query GetUserInfo($companyid: String!, $userid: String!) {
        getUserInfo(companyid: $companyid, userid: $userid) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      companyid,
      userid
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserInfoQuery>response.data.getUserInfo;
  }
  async ListUserInfos(
    companyid?: string,
    userid?: ModelStringKeyConditionInput,
    filter?: ModelUserInfoFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUserInfosQuery> {
    const statement = `query ListUserInfos($companyid: String, $userid: ModelStringKeyConditionInput, $filter: ModelUserInfoFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUserInfos(companyid: $companyid, userid: $userid, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            companyid
            userid
            firstname
            lastname
            dob
            registrationstatus
            faceimage
            faceid
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (companyid) {
      gqlAPIServiceArguments.companyid = companyid;
    }
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserInfosQuery>response.data.listUserInfos;
  }
  async UserInfoByFaceId(
    companyid: string,
    faceid?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserInfoByFaceIdQuery> {
    const statement = `query UserInfoByFaceId($companyid: String!, $faceid: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelUserInfoFilterInput, $limit: Int, $nextToken: String) {
        userInfoByFaceId(companyid: $companyid, faceid: $faceid, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            companyid
            userid
            firstname
            lastname
            dob
            registrationstatus
            faceimage
            faceid
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      companyid
    };
    if (faceid) {
      gqlAPIServiceArguments.faceid = faceid;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UserInfoByFaceIdQuery>response.data.userInfoByFaceId;
  }
  async UserInfoByRegStatus(
    companyid: string,
    registrationstatus?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserInfoByRegStatusQuery> {
    const statement = `query UserInfoByRegStatus($companyid: String!, $registrationstatus: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelUserInfoFilterInput, $limit: Int, $nextToken: String) {
        userInfoByRegStatus(companyid: $companyid, registrationstatus: $registrationstatus, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            companyid
            userid
            firstname
            lastname
            dob
            registrationstatus
            faceimage
            faceid
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      companyid
    };
    if (registrationstatus) {
      gqlAPIServiceArguments.registrationstatus = registrationstatus;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UserInfoByRegStatusQuery>response.data.userInfoByRegStatus;
  }
  async GetConfigEntry(
    configroot: string,
    configid: string
  ): Promise<GetConfigEntryQuery> {
    const statement = `query GetConfigEntry($configroot: String!, $configid: String!) {
        getConfigEntry(configroot: $configroot, configid: $configid) {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      configroot,
      configid
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetConfigEntryQuery>response.data.getConfigEntry;
  }
  async ListConfigEntries(
    configroot?: string,
    configid?: ModelStringKeyConditionInput,
    filter?: ModelConfigEntryFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListConfigEntriesQuery> {
    const statement = `query ListConfigEntries($configroot: String, $configid: ModelStringKeyConditionInput, $filter: ModelConfigEntryFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listConfigEntries(configroot: $configroot, configid: $configid, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            configroot
            configid
            value
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (configroot) {
      gqlAPIServiceArguments.configroot = configroot;
    }
    if (configid) {
      gqlAPIServiceArguments.configid = configid;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListConfigEntriesQuery>response.data.listConfigEntries;
  }
  async GetCachedCollectionList(
    configroot: string,
    collectionid: string
  ): Promise<GetCachedCollectionListQuery> {
    const statement = `query GetCachedCollectionList($configroot: String!, $collectionid: String!) {
        getCachedCollectionList(configroot: $configroot, collectionid: $collectionid) {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      configroot,
      collectionid
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCachedCollectionListQuery>response.data.getCachedCollectionList;
  }
  async ListCachedCollectionLists(
    configroot?: string,
    collectionid?: ModelStringKeyConditionInput,
    filter?: ModelCachedCollectionListFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCachedCollectionListsQuery> {
    const statement = `query ListCachedCollectionLists($configroot: String, $collectionid: ModelStringKeyConditionInput, $filter: ModelCachedCollectionListFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCachedCollectionLists(configroot: $configroot, collectionid: $collectionid, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            configroot
            collectionid
            arn
            created
            facemodel
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (configroot) {
      gqlAPIServiceArguments.configroot = configroot;
    }
    if (collectionid) {
      gqlAPIServiceArguments.collectionid = collectionid;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCachedCollectionListsQuery>(
      response.data.listCachedCollectionLists
    );
  }
  OnCreateCognitoUserListener(
    id?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCognitoUser">>
  > {
    const statement = `subscription OnCreateCognitoUser($id: String) {
        onCreateCognitoUser(id: $id) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCognitoUser">>
    >;
  }

  OnUpdateCognitoUserListener(
    id?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCognitoUser">>
  > {
    const statement = `subscription OnUpdateCognitoUser($id: String) {
        onUpdateCognitoUser(id: $id) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCognitoUser">>
    >;
  }

  OnDeleteCognitoUserListener(
    id?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCognitoUser">>
  > {
    const statement = `subscription OnDeleteCognitoUser($id: String) {
        onDeleteCognitoUser(id: $id) {
          __typename
          id
          address
          birthdate
          email
          email_verified
          family_name
          gender
          given_name
          locale
          middle_name
          name
          nickname
          phone_number
          picture
          preferred_username
          profile
          zoneinfo
          updated_at
          website
          sub
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCognitoUser">>
    >;
  }

  OnCreateUserInfoListener(
    userid?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserInfo">>
  > {
    const statement = `subscription OnCreateUserInfo($userid: String) {
        onCreateUserInfo(userid: $userid) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserInfo">>
    >;
  }

  OnUpdateUserInfoListener(
    userid?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserInfo">>
  > {
    const statement = `subscription OnUpdateUserInfo($userid: String) {
        onUpdateUserInfo(userid: $userid) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserInfo">>
    >;
  }

  OnDeleteUserInfoListener(
    userid?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserInfo">>
  > {
    const statement = `subscription OnDeleteUserInfo($userid: String) {
        onDeleteUserInfo(userid: $userid) {
          __typename
          companyid
          userid
          firstname
          lastname
          dob
          registrationstatus
          faceimage
          faceid
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserInfo">>
    >;
  }

  OnCreateConfigEntryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateConfigEntry">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConfigEntry {
        onCreateConfigEntry {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateConfigEntry">>
  >;

  OnUpdateConfigEntryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateConfigEntry">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConfigEntry {
        onUpdateConfigEntry {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateConfigEntry">>
  >;

  OnDeleteConfigEntryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteConfigEntry">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConfigEntry {
        onDeleteConfigEntry {
          __typename
          configroot
          configid
          value
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteConfigEntry">>
  >;

  OnCreateCachedCollectionListListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateCachedCollectionList">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCachedCollectionList {
        onCreateCachedCollectionList {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateCachedCollectionList">
    >
  >;

  OnUpdateCachedCollectionListListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateCachedCollectionList">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCachedCollectionList {
        onUpdateCachedCollectionList {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateCachedCollectionList">
    >
  >;

  OnDeleteCachedCollectionListListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteCachedCollectionList">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCachedCollectionList {
        onDeleteCachedCollectionList {
          __typename
          configroot
          collectionid
          arn
          created
          facemodel
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteCachedCollectionList">
    >
  >;
}
