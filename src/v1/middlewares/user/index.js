import { keysValidation } from '../general/keysEntityValidation.js'
import { loginValidation, signupValidation } from './user.validation.js'
import { isUserActive, isUserInactive, isUserAdmin } from '../general/auth.validation.js'

const userValidate = {
    getUserRole: [
        isUserActive,
        isUserAdmin,
    ],
    getUserAll: [
        isUserActive,
        isUserAdmin,
    ],
    postSignup: [
        keysValidation.user,
        isUserInactive,
        signupValidation,
    ],
    postLogin: [
        loginValidation,
    ],
    getLogout: [
        isUserActive,
    ]
}

export default userValidate