import { createConsoleValidation, updateConsoleValidation } from "./console.validation.js"
import { validateIdMiddleware } from '../general/id.validation.js'
import { keysValidation } from '../general/keysEntityValidation.js'

const consoleValidate = {
    getId: [
        validateIdMiddleware,
    ],
    post: [
        keysValidation.console,
        createConsoleValidation,
    ],
    patch: [
        keysValidation.console,
        validateIdMiddleware,
        updateConsoleValidation,
    ],
    deleteId: [
        validateIdMiddleware, 
    ]
}

export default consoleValidate