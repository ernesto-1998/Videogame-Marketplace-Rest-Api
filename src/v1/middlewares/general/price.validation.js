import STATUS from '../../enums/status-keys.js'

const priceMin = (req, res, next) => {
    if(req.body.price !== undefined) {
        if(req.body.price < 0) {
            res.status(400).json({
                status: STATUS.ERROR,
                message: "price cannot be lower than 0..."
            })
        } else {
            next()
        }
    } else {
        next()
    }
}

export default priceMin