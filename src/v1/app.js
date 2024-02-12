import express from 'express'

import sessionInstance from './session/index.js'
import * as authValidator from './middlewares/general/auth.validation.js'

import userRoutes from './routes/user.routes.js'
import profileRoutes from './routes/profile.routes.js'
import addressRoutes from './routes/address.routes.js'
import consoleRoutes from './routes/console.routes.js'
import videogameRoutes from './routes/videogame.routes.js'
import genderRoutes from './routes/gender.routes.js'
import perifericRoutes from './routes/periferic.routes.js'
import filterRoutes from './routes/filter.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(sessionInstance)

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/profiles', authValidator.isUserActive, profileRoutes)
app.use('/api/v1/addresses', authValidator.isUserActive, addressRoutes)
app.use('/api/v1/consoles', authValidator.isUserActive, consoleRoutes)
app.use('/api/v1/videogames', authValidator.isUserActive, videogameRoutes)
app.use('/api/v1/genders', authValidator.isUserActive, genderRoutes)
app.use('/api/v1/periferics', authValidator.isUserActive, perifericRoutes)
app.use('/api/v1/filters', filterRoutes)

export default app
