import { Router } from 'express'

import * as videogameControllers from '../controllers/videogame.controllers.js'

const router = Router()

router.get('/genders', videogameControllers.getGenders)

export default router
