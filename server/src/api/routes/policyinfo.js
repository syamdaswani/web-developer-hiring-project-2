"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const policyinfo_1 = __importDefault(require("../../services/policyinfo"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/policyInfo', route);
    app.get('/getPolicyInfo', function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const policyInfoServiceInstance = typedi_1.Container.get(policyinfo_1.default);
                const policyInfoList = yield policyInfoServiceInstance.getPolicyInfo();
                return res.status(200).json(policyInfoList);
            }
            catch (e) {
                console.log('error: ', e);
            }
        });
    });
    app.get('/getPolicyReportInfo', function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const policyInfoServiceInstance = typedi_1.Container.get(policyinfo_1.default);
                const policyReportInfoList = yield policyInfoServiceInstance.getPolicyReportInfo();
                return res.status(200).json(policyReportInfoList);
            }
            catch (e) {
                console.log('error: ', e);
            }
        });
    });
};
