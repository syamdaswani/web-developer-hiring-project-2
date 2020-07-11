import expressLoader from './express';

// @ts-ignore
export default ({ expressApp }) => {
    expressLoader({ app: expressApp });
    console.log('Express loaded');
};