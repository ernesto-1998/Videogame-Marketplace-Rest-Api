import { validationResult } from 'express-validator'
import * as profileServices from '../services/profile.services.js'
import errorMap from '../utils/error-map-handler.js'

import STATUS from '../enums/status-keys.js'

export const getProfileByUserId = async (req, res) => {
    try {
        const data = await profileServices.getProfileByUserId(
            req.session.user.id
        )
        if (data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT,
                message: "User does not have a profile..."
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const createProfile = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await profileServices.createProfile(
                req.body,
                req.session.user.id
            )
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

export const updateProfile = async (req, res) => {
    try {
        const data = await profileServices.updateProfile(
            req.body,
            req.session.user.id
        )
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        } else {
            res.status(200).json({
                status: STATUS.UPDATE,
                data,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const data = await profileServices.deleteProfile(req.session.user.id)
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        } else {
            res.status(200).json({
                status: STATUS.DELETE,
                data,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
