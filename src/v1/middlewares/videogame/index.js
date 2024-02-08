import { createVideogameValidation, updateVideogameValidation } from './videogame.validation.js'
import { validateIdMiddleware } from '../general/id.validation.js'
import { keysValidation } from '../general/keysEntityValidation.js'
import { validateGenderArrayMiddleware } from '../general/gender.validation.js'
import priceMin from '../general/price.validation.js'

const videogameValidate = {
    getId: [
        validateIdMiddleware,
    ],
    post: [
        keysValidation.videogame,
        createVideogameValidation,
        validateGenderArrayMiddleware,
        priceMin,
    ],
    patch: [
        keysValidation.videogame,
        validateIdMiddleware,
        updateVideogameValidation,
        validateGenderArrayMiddleware,
        priceMin,
    ],
    deleteId: [
        validateIdMiddleware,
    ]
}

export default videogameValidate