import pg from '../../db/connection.js'

import STATUS from '../../enums/status-keys.js'

export const validateGenderArrayMiddleware = (req, res, next) => {
    if(Array.isArray(req.body.genders)) {
        if(req.body.genders) {
            const areAllInteger = req.body.genders.every(gender => /^\d+$/.test(gender))
            if (areAllInteger) {
                next() 
            } else {
                res.status(400).json({ status: STATUS.ERROR, message: 'genders must be integers...' })
            }
        } else {
            next()
        }
    } else {
        res.status(400).json({ status: STATUS.ERROR, message: 'genders must be an array...' })
    }
}

export const validateGendersExists = (req, res, next) => {
    if(req.body.genders) {
        const message = 'There is one or more gender that does not exists'
        const validGenders = pg.genders.rows
        let hasDifferentValue = []
        for(let gender of req.body.genders) {
            console.log(validGenders)
            hasDifferentValue.push(validGenders.some(gender_id => gender_id.id === gender))
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    } else {
        next()
    }
}