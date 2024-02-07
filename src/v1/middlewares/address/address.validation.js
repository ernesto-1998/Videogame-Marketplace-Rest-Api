import { body } from 'express-validator'

export const createAddressValidation = [
    body('country', 'country null').exists().isString().withMessage('It must been an string'),
    body('state', 'state null').exists().isString().withMessage('It must been an string'),
    body('street', 'state null').exists().isString().withMessage('It must been an string'),
    body('zip_code', 'zip_code null').exists().isString().withMessage('It must been an string'),
]

export const updateAddressValidation = [
    body('country', 'country null').optional().isString().withMessage('It must been an string'),
    body('state', 'state null').optional().isString().withMessage('It must been an string'),
    body('street', 'state null').optional().isString().withMessage('It must been an string'),
    body('zip_code', 'zip_code null').optional().isString().withMessage('It must been an string'),
]