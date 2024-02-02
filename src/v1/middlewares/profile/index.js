import { keysValidation } from '../general/keysEntityValidation.js'
import { updateProfileValidation, createProfileValidation } from './profile.validation.js'
import { validateDateMiddleware } from '../general/date.validation.js'

const profileValidate = {
    post: [
        keysValidation.profile,
        createProfileValidation,
        validateDateMiddleware,
    ],
    patch: [
        keysValidation.profile,
        updateProfileValidation,
        validateDateMiddleware,
    ]
}

export default profileValidate