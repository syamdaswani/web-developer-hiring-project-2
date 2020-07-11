import express from 'express';
import cors from 'cors';
import routes from '../api';
import config from '../config';
export default ({ app }: { app: express.Application }) => {
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());
    // Load API routes
    app.use(config.api.prefix, routes());
};