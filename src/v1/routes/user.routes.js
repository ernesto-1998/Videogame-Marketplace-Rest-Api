import { Router } from 'express'
import * as userControllers from '../controllers/user.controllers.js'
import * as userValidation from '../middlewares/user.validation.js'
import * as authValidation from '../middlewares/general/auth.validation.js'
import { keysValidation } from '../middlewares/general/keysEntityValidation.js'

const router = Router()

router.get(
    '/user-role',
    authValidation.isUserActive,
    authValidation.isUserAdmin,
    userControllers.getUserRoles
)

router.get(
    '/user-all',
    authValidation.isUserActive,
    authValidation.isUserAdmin,
    userControllers.getAllUsers
)

router.post(
    '/signup',
    keysValidation.user,
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

router.patch('/update')

export default router
