import { Router } from 'express'

import { validateIdMiddleware } from '../middlewares/general/id.validation.js'
import * as consoleValidator from '../middlewares/console.validation.js'
import * as consoleControllers from '../controllers/console.controllers.js'

const router = Router()

router.get('/console-dictionary', consoleControllers.getConsoleDictionary)

router.get('/', consoleControllers.getAllConsolesByUserId)
router.get('/:id', validateIdMiddleware, consoleControllers.getConsoleById)
router.post('/', consoleValidator.createConsoleValidation, consoleControllers.createConsole)
router.patch('/:id', validateIdMiddleware, consoleValidator.updateConsoleValidation, consoleControllers.updateConsole)
router.delete('/', consoleControllers.deleteAllConsolesByUserId)
router.delete('/:id', validateIdMiddleware, consoleControllers.deleteConsole)


export default router
