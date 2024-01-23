import { body } from "express-validator";

const signupValidation = [
    body('user_type_id', 'Introduce the role of the user').exists().isNumeric(),
    body('email', 'Email format incorrect').exists().isEmail(),
    body('password', 'Password length incorrect').exists().isLength({min: 8, max: 50}),
]

const loginValidation = [
    body('email', 'Email format is incorret').exists().isEmail(),
    body('password', 'Password length incorrect').exists(),
]

const profileValidation = [
    body('name', 'Introduce your name').exists(),
    body('lastname', 'Introduce your lastname').exists(),
    body('date_birth', 'Introduce your date of birth').exists().isDate({format: 'DD/MM/YYYY',}),
    body('profile_pic', 'Incorret format for profile image').isString(),
    body('contact_email', 'Incorrect format for contact email').isString().isEmail(),
    body('contact_number', 'Incorrect format for contact number').isString(),
]

const userValidation = {
    signupValidation,
    profileValidation,
    loginValidation,
}

export default userValidation