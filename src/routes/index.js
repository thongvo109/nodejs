const newsRouter = require('./news');
const courseRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');
const userRouter = require('./user');
const apiRouter = require('./api');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/auth', userRouter);
    app.use('/api', apiRouter);
    app.use('/', siteRouter);
}
module.exports = route;
