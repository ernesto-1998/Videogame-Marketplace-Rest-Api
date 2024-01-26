import * as userServices from '../services/user.services.js'
import { validationResult } from 'express-validator'

export const getUserRoles = async (req, res) => {
    try {
        const user_roles = await userServices.getUserRoles()
        if (!user_roles) req.status(204).json({ status: 'no content' })
        else res.status(200).json(user_roles)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const signupController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(
            errors.errors.map((error) => {
                return {
                    path: error.path,
                    value: error.value,
                    message: error.msg,
                }
            })
        )
    } else {
        try {
            const user_created = await userServices.createUser(req.body)
            if (typeof user_created === 'string') {
                res.status(400).json({
                    message: user_created,
                })
            } else {
                res.status(200).json(user_created)
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export const loginController = async (req, res) => {
    try {
        const user = await userServices.loginUser(req.body)
        if (typeof user === 'string') {
            res.status(400).json({
                message: user,
            })
        } else {
            res.status(200).json({
                status: 'Loging successfully',
                user: user,
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createProfile = (req, res) => {
    res.json(req.body)
}

export const updateProfile = (req, res) => {
    res.json(req.body)
}
