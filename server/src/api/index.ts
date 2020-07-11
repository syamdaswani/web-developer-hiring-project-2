import {Router} from 'express';
import policyInfo from './routes/policyinfo';

// guaranteed to get dependencies
export default () => {
    const app = Router();
    policyInfo(app);
    return app;
}