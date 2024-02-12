import { validateIdMiddleware } from "../general/id.validation.js";

const genderValidation = {
    getId: [
        validateIdMiddleware,
    ],
}

export default genderValidation