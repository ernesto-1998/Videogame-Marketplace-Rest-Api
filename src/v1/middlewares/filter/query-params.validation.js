import STATUS from "../../enums/status-keys.js"

export const queryPrice = (req, res, next) => {
    if(req.query.min !== undefined && req.query.max !== undefined) {
        if(/^\d+$/.test(req.query.min) && /^\d+$/.test(req.query.max)) {
            next()
        } else {
                res.status(400).json({
                status: STATUS.ERROR,
                message: "max and min params must be integers"
            })
        }
    } else if(req.query.min !== undefined) {
        if(/^\d+$/.test(req.query.min)) {
            next()
        } else {
            res.status(400).json({
                status: STATUS.ERROR,
                message: "min param must be an integer"
            })
        }
    } else if(req.query.max !== undefined) {
        if(/^\d+$/.test(req.query.max)) {
            next()
        } else {
            res.status(400).json({
                status: STATUS.ERROR,
                message: "max param must be an integer"
            })
        }
    } else if (req.query.min === undefined && req.query.max === undefined) {
        res.status(400).json({
            status: STATUS.ERROR,
            message: "You must send max or min query param..."
        })
    }
}

export const queryIsSoldOrUsed = (req, res, next) => {
    if(req.query.sold !== undefined && req.query.used !== undefined) {
        if((req.query.sold === "true" || req.query.sold === "false") && (req.query.used === "true" || req.query.used === "false")) {
            next()
        } else {
                res.status(400).json({
                status: STATUS.ERROR,
                message: "sold and used params must be true or false values..."
            })
        }
    } else if (req.query.sold !== undefined) {
        if(req.query.sold === "true" || req.query.sold === "false") {
            next()
        } else {
                res.status(400).json({
                status: STATUS.ERROR,
                message: "sold param must be true or false values..."
            })
        }
    } else if (req.query.used !== undefined) {
        if(req.query.used === "true" || req.query.used === "false") {
            next()
        } else {
                res.status(400).json({
                status: STATUS.ERROR,
                message: "sold param must be true or false values..."
            })
        }
    } else if (req.query.sold === undefined && req.query.used === undefined) {
        res.status(400).json({
            status: STATUS.ERROR,
            message: "You must send sold or used query param..."
        })
    }
}