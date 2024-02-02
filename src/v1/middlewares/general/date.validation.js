import STATUS from "../../enums/status-keys.js"

export const validateDateMiddleware = (req, res, next) => {
    if (req.body && req.body.date_birth) {
        const dateFormatRegex = /^\d{4}\/\d{2}\/\d{2}$/

        if (!dateFormatRegex.test(req.body.date_birth)) {
            res.status(400).json({ 
                status: STATUS.ERROR,
                message: 'Invalid date format. Must be YYYY/MM/DD',
             })
        } else {
            next()
        }
    } else {
        next()
    }
}
