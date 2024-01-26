import { Router } from 'express'
import * as userControllers from '../controllers/user.controllers.js'
import * as userValidation from '../middlewares/user.validation.js'

const router = Router()

router.get('/user-role', userControllers.getUserRoles)

router.post(
    '/signup',
    userValidation.signupValidation,
    userControllers.signupController
)
router.post(
    '/login',
    userValidation.loginValidation,
    userControllers.loginController
)

export default router
