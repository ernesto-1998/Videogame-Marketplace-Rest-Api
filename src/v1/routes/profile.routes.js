import { Router } from 'express'
import * as profileControllers from '../controllers/profile.controllers.js'

import profileValidate from '../middlewares/profile/index.js'

const router = Router()

router.get('/profile', profileControllers.getProfileByUserId)
router.post(
    '/profile',
    ...profileValidate.post,
    profileControllers.createProfile
)
router.patch(
    '/profile',
    ...profileValidate.patch,
    profileControllers.updateProfile
)
router.delete('/profile', profileControllers.deleteProfile)

export default router
