import entitieKeys from '../../keys/entities-keys.js'
import STATUS from '../../enums/status-keys.js'

const message = 'There are keys in the body that does not exists...'

export const keysValidation = {
    profile: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(entitieKeys.profile.some((pk) => pk === key))
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
    user: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(entitieKeys.user.some((pk) => pk === key))
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
    address: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(entitieKeys.address.some((pk) => pk === key))
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
    console: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(entitieKeys.console.some((pk) => pk === key))
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
    videogame: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(
                entitieKeys.videogame.some((pk) => pk === key)
            )
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
    periferic: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(
                entitieKeys.periferic.some((pk) => pk === key)
            )
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
    videogame_gender: (req, res, next) => {
        let hasDifferentValue = []
        for (let key in req.body) {
            hasDifferentValue.push(
                entitieKeys.videogame_gender.some((pk) => pk === key)
            )
        }
        if (hasDifferentValue.some((value) => value === false)) {
            res.status(400).json({
                status: STATUS.ERROR,
                message,
            })
        } else {
            next()
        }
    },
}
