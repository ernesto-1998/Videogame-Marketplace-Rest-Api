import { validationResult } from 'express-validator'
import * as profileServices from '../services/profile.services.js'
import errorMap from '../utils/error-map-handler.js'

export const getProfileByUserId = async (req, res) => {
    try {
        const profile = await profileServices.getProfileByUserId(
            req.session.user.id
        )
        if (!profile) {
            res.status(404).json({
                status: 'There is no profile for this user...',
            })
        } else {
            res.status(200).json({
                status: 'Profile successfully found',
                profile: profile,
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
            const profile_created = await profileServices.createProfile(
                req.body,
                req.session.user.id
            )
            if (typeof profile_created === 'string') {
                res.status(400).json({ status: profile_created })
            } else {
                res.status(200).json({
                    status: 'Profile created',
                    profile: profile_created,
                })
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export const updateProfile = async (req, res) => {
    try {
        const profile_updated = await profileServices.updateProfile(
            req.body,
            req.session.user.id
        )
        if (typeof profile_updated === 'string') {
            res.status(400).json({ status: profile_updated })
        } else {
            res.status(200).json({
                status: 'Profile successfully updated',
                profile_updated: profile_updated,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const profile_deleted = await profileServices.deleteProfile(
            req.session.user.id
        )
        if (typeof profile_deleted === 'string') {
            res.status(400).json({ status: profile_deleted })
        } else {
            res.status(200).json({
                status: 'Profile successfully deleted',
                profile_deleted: profile_deleted,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
