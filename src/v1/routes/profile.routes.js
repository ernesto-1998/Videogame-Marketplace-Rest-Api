import { Router } from 'express'
import * as profileControllers from '../controllers/profile.controllers.js'
import * as authValidator from '../middlewares/auth.validation.js'
import * as profileValidator from '../middlewares/profile.validation.js'
import * as dateValidator from '../middlewares/date.validation.js'

const router = Router()

router.get('/profile', profileControllers.getProfileByUserId)
router.post('/profile', dateValidator.validateDateMiddleware,profileValidator.profileValidation, profileControllers.createProfile)
router.patch('/profile', profileValidator.updateProfileValidation, profileControllers.updateProfile)
router.delete('/profile', authValidator.isUserActive, profileControllers.deleteProfile)

export default router