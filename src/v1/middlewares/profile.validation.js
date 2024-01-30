import { body } from 'express-validator'

export const createProfileValidation = [
    body('name', 'Name null').exists(),
    body('lastname', 'Lastname null').exists(),
    body('date_birth', 'Date of birth null')
        .exists()
        .withMessage('Date format incorret, must be YYYY-MM-DD'),
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
