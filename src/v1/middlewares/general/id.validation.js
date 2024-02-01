export const validateIdMiddleware = (req, res, next) => {
        if(/^\d+$/.test(req.params['id'])) {
            next()
        } else {
            res.status(400).json({
                error: 'id param must be a integer'
            })
        }
}