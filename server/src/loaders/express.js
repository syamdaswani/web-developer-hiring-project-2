"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
exports.default = ({ app }) => {
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // Load API routes
    app.use(config_1.default.api.prefix, api_1.default());
};
