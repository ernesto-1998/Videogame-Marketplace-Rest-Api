import { Router } from 'express'
import * as profileControllers from '../controllers/profile.controllers.js'

const router = Router()

router.get('/profile', profileControllers.getProfileByUserId)

