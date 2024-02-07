import { Router } from 'express'
import addressValidate from '../middlewares/address/index.js'
import * as addressControllers from '../controllers/address.controllers.js'

const router = Router()

router.get('/', addressControllers.getAllAddressByUserId)
router.get('/:id', ...addressValidate.getId, addressControllers.getAddressById)
router.post(
    '/',
    ...addressValidate.post,
    addressControllers.createAddress
)
router.patch(
    '/:id',
    ...addressValidate.patch,
    addressControllers.updateAddress
)
router.delete('/', addressControllers.deleteAllAddressByUserId)
router.delete('/:id', ...addressValidate.deleteId, addressControllers.deleteAddress)

export default router