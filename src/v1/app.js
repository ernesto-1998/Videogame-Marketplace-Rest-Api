import express from 'express'

import sessionInstance from './session/index.js'

import userRoutes from './routes/user.routes.js'
import profileRoutes from './routes/profile.routes.js'
import consoleRoutes from './routes/console.routes.js'
import videogameRoutes from './routes/videogame.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(sessionInstance)

app.get('/', (req, res) => {
    if (req.session) {
        res.json(req.session)
    } else {
        res.json({ message: 'No hay sesión almacenada' })
    }
})

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/user', profileRoutes)
app.use('/api/v1/console', consoleRoutes)
app.use('/api/v1/videogame', videogameRoutes)

export default app
