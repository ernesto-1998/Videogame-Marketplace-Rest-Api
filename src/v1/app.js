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

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(sessionInstance)

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/user', authValidator.isUserActive, profileRoutes)
app.use('/api/v1/address', authValidator.isUserActive, addressRoutes)
app.use('/api/v1/console', authValidator.isUserActive, consoleRoutes)
app.use('/api/v1/videogame', authValidator.isUserActive, videogameRoutes)
app.use('/api/v1/gender', authValidator.isUserActive, genderRoutes)
app.use('/api/v1/periferic', authValidator.isUserActive, perifericRoutes)

export default app
