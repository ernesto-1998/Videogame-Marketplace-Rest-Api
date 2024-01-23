import { Router } from 'express'
import * as userControllers from '../controllers/user.controllers.js'
import userValidation from '../middlewares/user.validation.js'

const router = Router()

router.get('/user-type', userControllers.getUserRoles)

router.get('/signup', userValidation.signupValidation, userControllers.signupController)
router.get('/login', userValidation.loginValidation, userControllers.loginController)
router.post('/profile', userValidation.profileValidation, userControllers.createProfile)

export default router
