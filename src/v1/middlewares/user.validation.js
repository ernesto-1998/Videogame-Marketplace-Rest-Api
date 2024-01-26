import { body } from 'express-validator'
import { validateUserType } from '../utils/entities-validator.js'
import pg from '../db/connection.js'

export const signupValidation = [
    body('user_role_id', 'User role null')
        .exists()
        .isNumeric()
        .withMessage('Must be a numeric integer value')
        .custom((id) => {
            return validateUserType(pg.user_roles.rows, id)
        })
        .withMessage('User role does not exists...'),
    body('email', 'Email null')
        .exists()
        .isEmail()
        .withMessage('Email format incorrect'),
    body('password', 'Password null')
        .exists()
        .isLength({ min: 8, max: 50 })
        .withMessage(
            'Password length must be higher than 7 and smaller than 50'
        ),
]

export const loginValidation = [
    body('email', 'Email null')
        .exists()
        .isEmail()
        .withMessage('Email format incorrect'),
    body('password', 'Password length incorrect').exists(),
]

export const profileValidation = [
    body('user_id', 'User id null').exists(),
    body('name', 'Name null').exists(),
    body('lastname', 'Lastname null').exists(),
    body('date_birth', 'Date of birth null')
        .exists()
        .isDate({ format: 'DD/MM/YYYY' })
        .withMessage('Date format incorret, must be DD/MM/YYYY'),
    body(
        'profile_pic',
        'profile pic must be an url string where you have stored the image'
    ).isString(),
    body('contact_email', 'Contact email format incorrect').isEmail(),
    body('contact_number', 'Incorrect format for contact number').isString(),
]

// Custom functions
