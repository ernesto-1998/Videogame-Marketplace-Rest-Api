import * as userServices from '../services/user.services.js'
import { validationResult } from 'express-validator'

import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getUserRoles = async (req, res) => {
    try {
        const data = await userServices.getUserRoles()
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        } else {
            res.status(200).json({
                status: STATUS.GETS,
                data,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const data = await userServices.getAllUsers()
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        } else {
            res.status(200).json({
                status: STATUS.GETS,
                data,
            })
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
            const data = await userServices.createUser(req.body)
            if (data.rows.length === 0) {
                res.status(404).json({ status: STATUS.NO_CONTENT })
            } else {
                res.status(200).json({
                    status: STATUS.CREATE,
                    data,
                })
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
            const data = await userServices.loginUser(req.body)
            req.session.regenerate((err) => {
                if (err) {
                    return res.json({
                        status: STATUS.ERROR,
                        error: err,
                    })
                } else {
                    req.session.user = {
                        id: data.rows[0].id,
                        roleId: data.rows[0].user_role_id,
                        email: data.rows[0].email,
                    }
                    res.status(200).json({
                        status: STATUS.LOGIN,
                        data: {
                            id: data.rows[0].id,
                            roleId: data.rows[0].user_role_id,
                            email: data.rows[0].email,
                        },
                    })
                }
            })
        } catch (error) {
            res.status(400).json({
                status: STATUS.ERROR,
                message: error.message,
            })
        }
    }
}

export const logoutController = (req, res) => {
    if (req.session.user !== undefined) {
        req.session.destroy()
        res.clearCookie(process.env.SESSION_NAME)
        res.status(200).json({
            status: STATUS.LOGOUT,
        })
    } else {
        res.status(400).json({
            status: STATUS.ERROR,
            message: 'There is no active user to logout...',
        })
    }
}
