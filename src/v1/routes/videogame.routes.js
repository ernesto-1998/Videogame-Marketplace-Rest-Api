import { Router } from 'express'

import videogameValidate from '../middlewares/videogame/index.js'

import * as videogameControllers from '../controllers/videogame.controllers.js'

const router = Router()

router.get('/', videogameControllers.getAllVideogamesByUserId)
router.get('/:id', ...videogameValidate.getId, videogameControllers.getVideogameById)
router.post(
    '/',
    ...videogameValidate.post,
    videogameControllers.createVideogame
)
router.patch(
    '/:id',
    ...videogameValidate.patch,
    videogameControllers.updateVideogame
)
router.delete('/', videogameControllers.deleteAllVideogamesByUserId)
router.delete('/:id', ...videogameValidate.deleteId, videogameControllers.deleteVideogame)

export default router
