"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
function startServer() {
    const app = express_1.default();
    console.log('requiring loaders');
    require('./loaders').default({ expressApp: app });
    console.log('loaded');
    app.listen(config_1.default.port, err => {
        if (err) {
            console.log(err);
            process.exit(1);
            return;
        }
        console.log('Server listening on port: ', config_1.default.port);
    });
}
startServer();
