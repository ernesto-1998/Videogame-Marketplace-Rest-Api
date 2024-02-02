import { Router } from 'express'
import consoleValidate from '../middlewares/console/index.js'
import * as consoleControllers from '../controllers/console.controllers.js'

const router = Router()

router.get('/console-dictionary', consoleControllers.getConsoleDictionary)

router.get('/', consoleControllers.getAllConsolesByUserId)
router.get('/:id', ...consoleValidate.getId, consoleControllers.getConsoleById)
router.post(
    '/',
    ...consoleValidate.post,
    consoleControllers.createConsole
)
router.patch(
    '/:id',
    ...consoleValidate.patch,
    consoleControllers.updateConsole
)
router.delete('/', consoleControllers.deleteAllConsolesByUserId)
router.delete('/:id', ...consoleValidate.deleteId, consoleControllers.deleteConsole)

export default router
