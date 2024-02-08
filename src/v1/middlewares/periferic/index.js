import { createPerifericValidation, updatePerifericValidation } from './periferic.validation.js'
import { validateIdMiddleware } from '../general/id.validation.js'
import { keysValidation } from '../general/keysEntityValidation.js'
import priceMin from '../general/price.validation.js'

const perifericValidate = {
    getId: [
        validateIdMiddleware,
    ],
    post: [
        keysValidation.periferic,
        createPerifericValidation,
        priceMin,
    ],
    patch: [
        keysValidation.periferic,
        validateIdMiddleware,
        updatePerifericValidation,
        priceMin,
    ],
    deleteId: [
        validateIdMiddleware,
    ]
}

export default perifericValidate