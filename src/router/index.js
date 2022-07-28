const newUser = require('./User')
const newSite = require('./site')
const newLogin = require('./Login')
const newLogout = require('./logout')



function route(app) {
    app.use('/',newSite)
    app.use('/user',newUser)
    app.use('/login',newLogin)
    app.use('/logout',newLogout)

}



module.exports = route