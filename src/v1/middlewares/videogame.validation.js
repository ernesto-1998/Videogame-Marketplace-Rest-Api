import { body } from 'express-validator'

export const createVideogameValidation = [
    body('name', 'name null')
        .exists()
        .isString()
        .withMessage('name must be a text'),
    body('console_dict_id', 'console_dict_id null')
        .exists()
        .isNumeric()
        .withMessage('console_dict_id must be an integer'),
    body('is_used', 'is_used null')
        .exists()
        .isBoolean()
        .withMessage('is_used be a Boolean'),
    body('is_sold', 'is_sold null')
        .exists()
        .isBoolean()
        .withMessage('is_sold must be a Boolean'),
    body('price', 'price null')
        .exists()
        .isNumeric()
        .withMessage('price must be a number'),
    body('image', 'image null')
        .exists()
        .isString()
        .withMessage('image must be the public url where the image is stored'),
    body('description', 'description must be a text').optional().isString(),
]

export const updateVideogameValidation = [
    body('name', 'name null')
        .optional()
        .isString()
        .withMessage('name must be text'),
    body('console_dict_id', 'console_dict_id null')
        .optional()
        .isNumeric()
        .withMessage('console_dict_id must be an integer'),
    body('is_used', 'is_used null')
        .optional()
        .isBoolean()
        .withMessage('is_used be a Boolean'),
    body('is_sold', 'is_sold null')
        .optional()
        .isBoolean()
        .withMessage('is_sold must be a Boolean'),
    body('price', 'price null')
        .optional()
        .isNumeric()
        .withMessage('price must be a number'),
    body('image', 'image null')
        .optional()
        .isString()
        .withMessage('image must be the public url where the image is stored'),
    body('description', 'description must be a text').optional().isString(),
]
