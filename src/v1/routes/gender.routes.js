import { Router } from 'express'

import genderValidation from '../middlewares/gender/index.js'
import * as genderControllers from '../controllers/gender.controllers.js'

const router = Router()

router.get(
    '/',
    genderControllers.getGenders
)

router.get(
    '/:id',
    genderValidation.getId,
    genderControllers.getVideogameByGender
)

export default router
