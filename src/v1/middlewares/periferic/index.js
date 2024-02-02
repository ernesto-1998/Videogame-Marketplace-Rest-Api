import { createPerifericValidation, updatePerifericValidation } from './periferic.validation.js'
import { validateIdMiddleware } from '../general/id.validation.js'
import { keysValidation } from '../general/keysEntityValidation.js'

const perifericValidate = {
    getId: [
        validateIdMiddleware,
    ],
    post: [
        keysValidation.periferic,
        createPerifericValidation,
    ],
    patch: [
        keysValidation.periferic,
        validateIdMiddleware,
        updatePerifericValidation,
    ],
    deleteId: [
        validateIdMiddleware,
    ]
}

export default perifericValidate