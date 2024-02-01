import { Router } from 'express'
import * as genderControllers from '../controllers/gender.controllers.js'

const router = Router()

router.get(
    '/',
    genderControllers.getGenders
)

export default router
