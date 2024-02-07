import { createAddressValidation, updateAddressValidation } from "./address.validation.js"
import { validateIdMiddleware } from '../general/id.validation.js'
import { keysValidation } from '../general/keysEntityValidation.js'

const addressValidate = {
    getId: [
        validateIdMiddleware,
    ],
    post: [
        keysValidation.address,
        createAddressValidation,
    ],
    patch: [
        keysValidation.address,
        validateIdMiddleware,
        updateAddressValidation,
    ],
    deleteId: [
        validateIdMiddleware, 
    ]
}

export default addressValidate