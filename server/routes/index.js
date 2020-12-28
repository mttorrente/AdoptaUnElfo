module.exports = app => {

    // Base URLS
    app.use('/api/homes', require('./home.routes.js'))
    app.use('/api/users', require('./user.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
    app.use('/api/email', require('./nodemailer.routes'))
}