import { Router } from 'express'
import * as userControllers from '../controllers/user.controllers.js'
import * as userValidation from '../middlewares/user.validation.js'
import * as authValidation from '../middlewares/auth.validation.js'

const router = Router()

router.get(
    '/user-role',
    authValidation.isUserActive,
    authValidation.isUserAdmin,
    userControllers.getUserRoles
)

router.post(
    '/signup',
    userValidation.signupValidation,
    authValidation.isUserInactive,
    userControllers.signupController
)
router.post(
    '/login',
    userValidation.loginValidation,
    // authValidation.isUserInactive,
    userControllers.loginController
)

router.get(
    '/logout',
    authValidation.isUserActive,
    userControllers.logoutController
)

export default router
