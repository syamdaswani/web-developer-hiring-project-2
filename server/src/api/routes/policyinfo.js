"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/policyInfo', route);
    app.get('/getPolicyInfo', function (req, res) {
        res.send('getPolicyInfo hello world');
    });
};
