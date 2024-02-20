import STATUS from "../../enums/status-keys.js"

export const isUserActive = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.status(401).json({
            status: STATUS.ERROR,
            message: 'You need to login in order to complete this action...',
        })
    }
}

export const isUserInactive = (req, res, next) => {
    if (!req.session.user) {
        next()
    } else {
        res.status(400).json({
            status: STATUS.ERROR,
            message:
                'You have an active user, please logout in order to complete this action...',
        })
    }
}

export const isUserAdmin = (req, res, next) => {
    if (req.session.user.roleId === 1) {
        next()
    } else {
        res.status(403).json({
            status: STATUS.ERROR,
            message: 'This resource requires admin privileges',
        })
    }
}
