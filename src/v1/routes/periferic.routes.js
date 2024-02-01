import { Router } from 'express'

import { validateIdMiddleware } from '../middlewares/general/id.validation.js'
import * as perifericValidator from '../middlewares/periferic.validation.js'
import { keysValidation } from '../middlewares/general/keysEntityValidation.js'

import * as perifericControllers from '../controllers/periferic.controllers.js'

const router = Router()

router.get('/', perifericControllers.getAllPerifericsByUserId)
router.get('/:id', validateIdMiddleware, perifericControllers.getPerifericById)
router.post('/', keysValidation.profile, perifericValidator.createPerifericValidation, perifericControllers.createPeriferic)
router.patch('/:id', keysValidation.profile, validateIdMiddleware, perifericValidator.updatePerifericValidation, perifericControllers.updatePeriferic)
router.delete('/', perifericControllers.deleteAllPerifericsByUserId)
router.delete('/:id', validateIdMiddleware, perifericControllers.deletePeriferic)


export default router