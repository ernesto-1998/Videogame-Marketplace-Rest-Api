import { Router } from 'express'
import * as profileControllers from '../controllers/profile.controllers.js'

import profileValidate from '../middlewares/profile/index.js'

const router = Router()

router.get('/', profileControllers.getProfileByUserId)
router.post(
    '/',
    ...profileValidate.post,
    profileControllers.createProfile
)
router.patch(
    '/',
    ...profileValidate.patch,
    profileControllers.updateProfile
)
router.delete('/', profileControllers.deleteProfile)

export default router
