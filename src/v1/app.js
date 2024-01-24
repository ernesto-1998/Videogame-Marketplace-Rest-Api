import express from 'express'

import userRoutes from './routes/user.routes.js'
import consoleRoutes from './routes/console.routes.js'
import videogameRoutes from './routes/videogame.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/console', consoleRoutes)
app.use('/api/v1/videogame', videogameRoutes)

export default app
