import { Router } from 'express'
import * as userControllers from '../controllers/user.controllers.js'

import userValidate from '../middlewares/user/index.js'

const router = Router()

router.get(
    '/user-role',
    ...userValidate.getUserRole,
    userControllers.getUserRoles
)

router.get(
    '/user-all',
    ...userValidate.getUserAll,
    userControllers.getAllUsers
)

router.post(
    '/signup',
    ...userValidate.postSignup,
    userControllers.signupController
)
router.post(
    '/login',
    userValidate.postLogin,
    userControllers.loginController
)

router.get(
    '/logout',
    ...userValidate.getLogout,
    userControllers.logoutController
)

router.patch('/update')

export default router
