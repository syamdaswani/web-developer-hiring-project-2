import config from './config';
import express from 'express';

function startServer() {
    const app = express();
    console.log('requiring loaders');
    require('./loaders').default({expressApp: app});
    console.log('loaded');

    app.listen(config.port, err => {
        if (err) {
            console.log(err);
            process.exit(1);
            return;
        }
        console.log('Server listening on port: ', config.port);
    });
}

startServer();