"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
var UserInfo = /** @class */ (function () {
    function UserInfo(model) {
        this.__typename = "UserInfo";
        this.companyid = "";
        this.userid = "";
        this.firstname = "";
        this.lastname = "";
        this.dob = "";
        this.registrationstatus = "";
        this.companyid = (model === null || model === void 0 ? void 0 : model.companyid) || this.companyid;
        this.userid = (model === null || model === void 0 ? void 0 : model.userid) || this.userid;
        this.firstname = (model === null || model === void 0 ? void 0 : model.firstname) || this.firstname;
        this.lastname = (model === null || model === void 0 ? void 0 : model.lastname) || this.lastname;
        this.dob = (model === null || model === void 0 ? void 0 : model.dob) || this.dob;
        this.registrationstatus = (model === null || model === void 0 ? void 0 : model.registrationstatus) || this.registrationstatus;
        this.faceimage = model === null || model === void 0 ? void 0 : model.faceimage;
        this.faceid = model === null || model === void 0 ? void 0 : model.faceid;
        this.description = model === null || model === void 0 ? void 0 : model.description;
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
