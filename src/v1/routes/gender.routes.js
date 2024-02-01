import { Router } from 'express'
import * as genderControllers from '../controllers/gender.controllers.js'
import * as authValidation from '../middlewares/general/auth.validation.js'

const router = Router()

router.get(
    '/gender',
    authValidation.isUserActive,
    authValidation.isUserAdmin,
    genderControllers.getGenders
)

export default router