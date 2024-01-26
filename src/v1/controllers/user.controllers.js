import * as userServices from '../services/user.services.js'
import { validationResult } from 'express-validator'

export const getUserRoles = async (req, res) => {
    try {
        console.log(req.session)
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
            const user = await userServices.loginUser(req.body)
            if (typeof user === 'string') {
                res.status(400).json({
                    message: user,
                })
            } else {
                req.session.save()
                req.session.user = {
                    id: user.id,
                    roleId: user.user_role_id,
                    email: user.email,
    
                }
                res.status(200).json({
                    status: 'Loging successfully',
                    user: user,
                })
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export const logoutController = (req, res) => {
    // if(req.session.user) {
        req.session.destroy();
        res.clearCookie(process.env.SESSION_NAME)
        res.status(200).json({ message: 'User successfully logout...' })
    // } else {
    //     res.status(400).json({ message: 'There is no active user to logout...' })
    // }
}

