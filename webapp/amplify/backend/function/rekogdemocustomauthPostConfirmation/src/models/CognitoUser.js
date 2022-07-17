"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoUser = void 0;
var CognitoUser = /** @class */ (function () {
    function CognitoUser(model) {
        this.__typename = "CognitoUser";
        this.id = "";
        this.email = "";
        this.email_verified = false;
        this.family_name = "";
        this.given_name = "";
        if (model) {
            if (!model.id && model.sub) {
                this.id = model.sub;
            }
            else {
                this.id = model.id;
            }
            this.address = model.address;
            this.birthdate = model.birthdate;
            this.email = model.email;
            this.email_verified = model.email_verified || this.email_verified;
            this.family_name = model.family_name;
            this.gender = model.gender;
            this.given_name = model.given_name;
            this.locale = model.locale;
            this.middle_name = model.middle_name;
            this.name = model.name;
            this.nickname = model.nickname;
            this.phone_number = model.phone_number;
            this.picture = model.picture;
            this.preferred_username = model.preferred_username;
            this.profile = model.profile;
            this.zoneinfo = model.zoneinfo;
            this.updated_at = model.updated_at;
            this.website = model.website;
            this.sub = model.sub;
        }
    }
    return CognitoUser;
}());
exports.CognitoUser = CognitoUser;
