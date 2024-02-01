import { Router } from 'express'

import { validateIdMiddleware } from '../middlewares/general/id.validation.js'
import { validateGenderArrayMiddleware } from '../middlewares/general/gender.validation.js'

import * as videogameValidator from '../middlewares/videogame.validation.js'
import * as videogameControllers from '../controllers/videogame.controllers.js'
import { keysValidation } from '../middlewares/general/keysEntityValidation.js'

const router = Router()

router.get('/', videogameControllers.getAllVideogamesByUserId)
router.get('/:id', validateIdMiddleware, videogameControllers.getVideogameById)
router.post(
    '/',
    keysValidation.videogame,
    videogameValidator.createVideogameValidation,
    validateGenderArrayMiddleware,
    videogameValidator.validateGendersExists,
    videogameControllers.createVideogame
)
router.patch(
    '/:id',
    keysValidation.videogame,
    validateIdMiddleware,
    videogameValidator.updateVideogameValidation,
    validateGenderArrayMiddleware,
    videogameValidator.validateGendersExists,
    videogameControllers.updateVideogame
)
router.delete('/', videogameControllers.deleteAllVideogamesByUserId)
router.delete('/:id', validateIdMiddleware, videogameControllers.deleteVideogame)

export default router
