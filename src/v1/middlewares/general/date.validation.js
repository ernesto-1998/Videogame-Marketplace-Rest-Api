export const validateDateMiddleware = (req, res, next) => {
    if (req.body && req.body.date_birth) {
        const dateFormatRegex = /^\d{4}\/\d{2}\/\d{2}$/

        if (!dateFormatRegex.test(req.body.date_birth)) {
            return res
                .status(400)
                .json({ error: 'Invalid date format. Must be YYYY/MM/DD' })
        }
    }
    next()
}
