import { Router } from 'express'
import * as profileControllers from '../controllers/profile.controllers.js'
import * as authValidator from '../middlewares/auth.validation.js'
import * as profileValidator from '../middlewares/profile.validation.js'
import * as dateValidator from '../middlewares/date.validation.js'

const router = Router()

router.get('/profile', authValidator.isUserActive, profileControllers.getProfileByUserId)
router.post('/profile', authValidator.isUserActive, dateValidator.validateDateMiddleware,profileValidator.profileValidation, profileControllers.createProfile)

export default router