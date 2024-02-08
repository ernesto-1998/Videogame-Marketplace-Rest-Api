import pg from '../../db/connection.js'

import STATUS from '../../enums/status-keys.js'

export const validateGenderArrayMiddleware = (req, res, next) => {
    if(req.body.genders !== undefined) {
        if(Array.isArray(req.body.genders) && req.body.genders.length > 0) {
            const areAllInteger = req.body.genders.every(gender => /^\d+$/.test(gender))
            if (areAllInteger) {
                const validGenders = pg.genders.rows
                let hasDifferentValue = []
                for(let gender of req.body.genders) {
                    hasDifferentValue.push(validGenders.some(gender_id => gender_id.id === gender))
                }
                if (!hasDifferentValue.some((value) => value === false)) {
                    const set = new Set(req.body.genders)
                    if (set.size === req.body.genders.length) {
                        next()
                    } else {
                        res.status(400).json({
                            status: STATUS.ERROR,
                            message: 'There is one or more gender repeated',
                        })
                    }
                } else {
                    res.status(400).json({
                        status: STATUS.ERROR,
                        message: 'There is one or more gender that does not exists',
                    })
                }
            } else {
                res.status(400).json({ status: STATUS.ERROR, message: 'genders must be integers...' })
            }
        } else {
            res.status(400).json({ status: STATUS.ERROR, message: 'genders must be a filled array...' })
        }
    } else {
        next()
    }
}
