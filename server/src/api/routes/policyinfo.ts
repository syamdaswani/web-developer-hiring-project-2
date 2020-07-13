import {Router} from 'express';
import {Container} from 'typedi';
import Policyinfo from '../../services/policyinfo';
import {PolicyInfoModel} from '../../models/policy-info.model';
import {PolicyReportModel} from '../../models/policy-report.model';

const route = Router();

export default (app: Router) => {
    app.use('/policyInfo', route);

    app.get('/getPolicyInfo', async function (req, res) {
        try {
            const policyInfoServiceInstance = Container.get(Policyinfo);
            const policyInfoList: Array<PolicyInfoModel> = await policyInfoServiceInstance.getPolicyInfo();
            return res.status(200).json(policyInfoList);
        } catch (e) {
            console.log('error: ', e);
        }
    });

    app.get('/getPolicyReportInfo', async function (req, res) {
        try {
            const policyInfoServiceInstance = Container.get(Policyinfo);
            const policyReportInfoList: Array<PolicyReportModel> = await policyInfoServiceInstance.getPolicyReportInfo();
            return res.status(200).json(policyReportInfoList);
        } catch (e) {
            console.log('error: ', e);
        }
    });
};