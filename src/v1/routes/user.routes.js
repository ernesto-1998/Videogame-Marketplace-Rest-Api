import { Router } from 'express'
import userController from '../controllers/user.controllers.js'

const router = Router()

router.get('/signup', userController.signupController)
router.get('/login', userController.loginController)

export default router
