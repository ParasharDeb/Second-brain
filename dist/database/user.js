"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contentmodel = exports.Tagmodel = exports.Usermodel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.Schema.ObjectId;
//Userschema
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.Usermodel = (0, mongoose_1.model)("User", userSchema);
//Tag Schema
const tagSchema = new mongoose_1.Schema({
    tag: { type: String, unique: true, required: true }
});
exports.Tagmodel = (0, mongoose_1.model)("Tag", tagSchema);
//Content Schema 
const ContentSchema = new mongoose_1.Schema({
    link: String,
    type: String,
    title: String,
    tags: [{ type: mongoose_2.default.Types.ObjectId, ref: 'Tag' }],
    userId: [{ type: mongoose_2.default.Types.ObjectId, ref: 'User', required: true }]
});
exports.Contentmodel = (0, mongoose_1.model)("Content", ContentSchema);
