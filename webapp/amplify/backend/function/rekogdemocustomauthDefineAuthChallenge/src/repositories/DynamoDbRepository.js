"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbRepository = void 0;
var AWS = __importStar(require("aws-sdk"));
var DynamoDbRepository = /** @class */ (function () {
    function DynamoDbRepository(tableName) {
        if (tableName === void 0) { tableName = ""; }
        this.tableName = tableName;
        var dynamoOptions = undefined;
        if (!!process.env.IS_OFFLINE) {
            dynamoOptions = {
                region: 'localhost',
                endpoint: 'http://localhost:8000',
                accessKeyId: 'DEFAULT_ACCESS_KEY',
                secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
            };
        }
        this.client = new AWS.DynamoDB.DocumentClient(dynamoOptions);
    }
    DynamoDbRepository.prototype.save = function (model) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = {
                TableName: _this.tableName,
                Item: _this.toDataObject(model)
            };
            _this.client.put(params, function (error, output) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(output);
                }
            });
        });
    };
    DynamoDbRepository.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = {
                TableName: _this.tableName,
                Key: { id: id }
            };
            _this.client.get(params, function (error, result) {
                if (error) {
                    reject(error);
                }
                else if (result.Item) {
                    var item = _this.toDomainObject(result.Item);
                    resolve(item);
                }
                else {
                    console.error("Item[".concat(id, "] not found in Table[").concat(_this.tableName, "]"));
                    reject(new Error("Item not found"));
                }
            });
        });
    };
    DynamoDbRepository.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = {
                TableName: _this.tableName,
                Key: { id: id }
            };
            _this.client.delete(params, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    return DynamoDbRepository;
}());
exports.DynamoDbRepository = DynamoDbRepository;
