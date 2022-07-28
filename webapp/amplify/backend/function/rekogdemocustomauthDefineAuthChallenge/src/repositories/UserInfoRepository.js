"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoRepository = void 0;
var DynamoDbRepository_1 = require("./DynamoDbRepository");
var models_1 = require("../models");
var UserInfoRepository = /** @class */ (function (_super) {
    __extends(UserInfoRepository, _super);
    function UserInfoRepository() {
        return _super.call(this, process.env.API_REKOGDEMOGRAPHQL_USERINFOTABLE_NAME) || this;
    }
    UserInfoRepository.prototype.toDomainObject = function (dataObject) {
        return new models_1.UserInfo(dataObject);
    };
    UserInfoRepository.prototype.toDataObject = function (businessObject) {
        return JSON.parse(JSON.stringify(businessObject));
    };
    return UserInfoRepository;
}(DynamoDbRepository_1.DynamoDbRepository));
exports.UserInfoRepository = UserInfoRepository;
