import { body } from "express-validator";


export const profileValidation = [
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

export const updateProfileValidation = (req, res, next) => {
    const profileKeys = ['name', 'lastname', 'date_birth', 'profile_pic', 'contact_email', 'contact_number']
    let hasDifferentValue = []
    for(let key in req.body){
        hasDifferentValue.push(profileKeys.some(pk => pk === key))
    }
    if(hasDifferentValue.some(value => value === false)) {
        res.status(400).json({status: 'Error', message: 'There are keys in the body that does not exists...'})
    } else {
        next()
    }
}