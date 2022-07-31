"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var https_1 = __importDefault(require("https"));
var url_1 = require("url");
var aws_sdk_1 = __importStar(require("aws-sdk"));
var _a = process.env, _b = _a.API_REKOGDEMOGRAPHQL_GRAPHQLAPIENDPOINTOUTPUT, appsyncUrl = _b === void 0 ? "fakeAppsyncUrl" : _b, _c = _a.REGION, region = _c === void 0 ? "us-east-1" : _c;
var endpoint = new url_1.URL(appsyncUrl).hostname.toString();
var loginuser = function (imageDataBase64) { return __awaiter(void 0, void 0, void 0, function () {
    var statement, req, signer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                statement = "query Loginuser($imageDataBase64: String) {\n        loginuser(imageDataBase64: $imageDataBase64) {\n          __typename\n          Success\n          Message\n          Confidence\n          CompanyId\n          UserId\n          FirstName\n          LastName\n          DOB\n          RegistrationStatus\n          FaceId\n          FaceImage\n        }\n      }";
                req = new aws_sdk_1.default.HttpRequest(new aws_sdk_1.Endpoint(appsyncUrl), region);
                req.method = 'POST';
                req.path = '/graphql';
                req.headers.host = endpoint;
                req.headers['Content-Type'] = 'application/json';
                req.body = JSON.stringify({
                    query: statement,
                    operationName: 'Loginuser',
                    variables: { imageDataBase64: imageDataBase64 }
                });
                signer = new aws_sdk_1.default.Signers.V4(req, 'appsync', true);
                // @ts-ignore
                signer.addAuthorization(aws_sdk_1.default.config.credentials, aws_sdk_1.default.util.date.getDate());
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        var httpRequest = https_1.default.request(__assign(__assign({}, req), { host: endpoint }), function (result) {
                            var data = '';
                            result.on('data', function (chunk) {
                                data += chunk;
                            });
                            result.on('end', function () {
                                resolve(JSON.parse(data.toString()));
                            });
                            result.on('error', function (error) {
                                reject(error);
                            });
                        });
                        httpRequest.write(req.body);
                        httpRequest.end();
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var handler = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, challengeAnswer, answer, loginUserResult, loginUser, Success, Confidence, FaceId, confidence;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = event.request, challengeAnswer = _a.challengeAnswer, answer = _a.privateChallengeParameters.answer;
                return [4 /*yield*/, loginuser(challengeAnswer)];
            case 1:
                loginUserResult = _b.sent();
                console.log("loginUserResult", loginUserResult);
                loginUser = loginUserResult.data.loginUser;
                Success = loginUser.Success, Confidence = loginUser.Confidence, FaceId = loginUser.FaceId;
                confidence = Confidence || 0;
                event.response.answerCorrect = !!(Success && confidence > .9 && answer === FaceId);
                return [2 /*return*/, event];
        }
    });
}); };
exports.handler = handler;
