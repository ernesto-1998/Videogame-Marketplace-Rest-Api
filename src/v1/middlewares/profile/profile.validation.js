import { body } from 'express-validator'

export const createProfileValidation = [
    body('name', 'Name null').exists(),
    body('lastname', 'Lastname null').exists(),
    body('date_birth', 'Date of birth null')
        .exists(),
    body(
        'profile_pic',
        'profile pic must be an url string where you have stored the image'
    )
        .optional()
        .isString(),
    body('contact_email', 'Contact email format incorrect')
        .optional()
        .isEmail(),
    body('contact_number', 'Incorrect format for contact number')
        .optional()
        .isString(),
]

export const updateProfileValidation = [
    body('name', 'Name null').optional().isString(),
    body('lastname', 'Lastname null').optional().isString(),
    body('date_birth', 'Date of birth null')
        .optional(),
    body(
        'profile_pic',
        'profile pic must be an url string where you have stored the image'
    )
        .optional()
        .isString(),
    body('contact_email', 'Contact email format incorrect')
        .optional()
        .isEmail(),
    body('contact_number', 'Incorrect format for contact number')
        .optional()
        .isString(),
]
