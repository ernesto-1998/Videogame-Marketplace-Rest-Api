import STATUS from '../../enums/status-keys.js'

export const validateGenderArrayMiddleware = (req, res, next) => {
    if(req.body.genders) {
        const areAllInteger = req.body.genders.every(gender => /^\d+$/.test(gender))
        if (areAllInteger) {
            next() 
        } else {
            res.status(400).json({ status: STATUS.ERROR, message: 'All genders must be integers...' })
        }
    } else {
        next()
    }
}