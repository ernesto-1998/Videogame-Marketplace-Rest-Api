import { Router } from 'express'
import * as profileControllers from '../controllers/profile.controllers.js'
import * as profileValidator from '../middlewares/profile.validation.js'
import * as dateValidator from '../middlewares/general/date.validation.js'
import { keysValidation } from '../middlewares/general/keysEntityValidation.js'

const router = Router()

router.get('/profile', profileControllers.getProfileByUserId)
router.post(
    '/profile',
    keysValidation.profile,
    dateValidator.validateDateMiddleware,
    profileValidator.createProfileValidation,
    profileControllers.createProfile
)
router.patch(
    '/profile',
    keysValidation.profile,
    profileControllers.updateProfile
)
router.delete('/profile', profileControllers.deleteProfile)

export default router
