"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const policyinfo_1 = __importDefault(require("./routes/policyinfo"));
// guaranteed to get dependencies
exports.default = () => {
    const app = express_1.Router();
    policyinfo_1.default(app);
    return app;
};
