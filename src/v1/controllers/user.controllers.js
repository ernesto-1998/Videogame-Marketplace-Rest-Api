import * as userServices from '../services/user.services.js'
import { validationResult } from 'express-validator'

import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getUserRoles = async (req, res) => {
    try {
        const user_roles = await userServices.getUserRoles()
        if (!user_roles) {
            req.status(404).json({ status: STATUS.NO_CONTENT })
        }
        else {
            res.status(200).json({
                status: STATUS.GETS,
                user_roles})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers()
        if (!users) {
            req.status(404).json({ status: STATUS.NO_CONTENT })
        }
        else {
            res.status(200).json({
                status: STATUS.GETS,
                users})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const signupController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const user_created = await userServices.createUser(req.body)
            if (typeof user_created === 'string') {
                res.status(400).json({
                    status: STATUS.ERROR,
                    message: user_created
                })
            } else {
                res.status(200).json({
                    status: STATUS.CREATE,
                    user_created})
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export const loginController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const user = await userServices.loginUser(req.body)
            if (typeof user === 'string') {
                res.status(400).json({
                    status: STATUS.ERROR,
                    message: user,
                })
            } else {
                req.session.regenerate((err) => {
                    if (err) {
                        res.json({
                            status: STATUS.ERROR,
                            error: err,
                        })
                    } else {
                        req.session.user = {
                            id: user.id,
                            roleId: user.user_role_id,
                            email: user.email,
                        }
                        res.status(200).json({
                            status: STATUS.LOGIN,
                            user: {
                                id: user.id,
                                roleId: user.user_role_id,
                                email: user.email,
                            },
                        })
                    }
                })
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export const logoutController = (req, res) => {
    req.session.destroy()
    res.clearCookie(process.env.SESSION_NAME)
    res.status(200).json({
        status: STATUS.LOGOUT,
    })
}
