import { Router } from 'express'

import * as consoleControllers from '../controllers/console.controllers.js'

const router = Router()

router.get('/console-dictionary', consoleControllers.getConsoleDictionary)

export default router
