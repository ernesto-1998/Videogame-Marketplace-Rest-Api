import { body } from 'express-validator'
import { validateUserRole } from '../utils/entities-validator.js'
import pg from '../db/connection.js'

export const signupValidation = [
    body('user_role_id', 'User role null')
        .exists()
        .isNumeric()
        .withMessage('Must be a numeric integer value')
        .custom((id) => {
            return validateUserRole(pg.user_roles.rows, id)
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

// Custom functions
