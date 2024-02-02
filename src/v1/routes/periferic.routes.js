import { Router } from 'express'

import perifericValidate from '../middlewares/periferic/index.js'

import * as perifericControllers from '../controllers/periferic.controllers.js'

const router = Router()

router.get('/', perifericControllers.getAllPerifericsByUserId)
router.get('/:id', ...perifericValidate.getId, perifericControllers.getPerifericById)
router.post(
    '/',
    ...perifericValidate.post,
    perifericControllers.createPeriferic
)
router.patch(
    '/:id',
    ...perifericValidate.patch,
    perifericControllers.updatePeriferic
)
router.delete('/', perifericControllers.deleteAllPerifericsByUserId)
router.delete(
    '/:id',
    ...perifericValidate.deleteId,
    perifericControllers.deletePeriferic
)

export default router
