import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

export default (app: Router) => {
    app.use('/policyInfo', route);

    app.get('/getPolicyInfo', function (req, res) {
        res.send('getPolicyInfo hello world')
    })
};