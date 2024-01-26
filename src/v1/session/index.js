import MongoStore from 'connect-mongo'
import session from 'express-session'

const mongoUrl = `mongodb://${process.env.SESSION_DB_USER}:${process.env.SESSION_DB_PASSWORD}@${process.env.SESSION_DB_HOST}/${process.env.SESSION_DB_DATABASE}?authSource=admin&w=1`

const sessionStore = MongoStore.create({
    mongoUrl: mongoUrl,
    collection: process.env.SESSION_DB_COLLECTION,
})

const sessionInstance = session({
    name: process.env.SESSION_NAME,
    httpOnly: true,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 4,
    },
})

export default sessionInstance
