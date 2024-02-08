import { createConsoleValidation, updateConsoleValidation } from "./console.validation.js"
import { validateIdMiddleware } from '../general/id.validation.js'
import { keysValidation } from '../general/keysEntityValidation.js'
import priceMin from "../general/price.validation.js"

const consoleValidate = {
    getId: [
        validateIdMiddleware,
    ],
    post: [
        keysValidation.console,
        createConsoleValidation,
        priceMin,
    ],
    patch: [
        keysValidation.console,
        validateIdMiddleware,
        updateConsoleValidation,
        priceMin,
    ],
    deleteId: [
        validateIdMiddleware, 
    ]
}

export default consoleValidate