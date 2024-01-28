import { validationResult } from 'express-validator'
import * as profileServices from '../services/profile.services.js'
import errorMap from '../utils/error-map-handler.js'

export const getProfileByUserId = async (req, res) => {
        try {
            const profile = await profileServices.getProfileByUserId(req.session.user.id)
            if (!profile) {
                res.status(404).json({
                    message: 'There is no profile for this user...',
                })
            } else {
                res.status(200).json({
                    message: 'Profile successfully found',
                    profile: profile,
                })
            }
        } catch (error) {
            res.status(500).send(error)
        }
}

export const createProfile = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(
            errorMap(errors)
        )
    } else {
        const profile_created = await profileServices.createProfile(req.body, req.session.user.id)
        if(typeof profile_created === 'string') {
            res.status(400).json({ message: profile_created })
        } else {
            res.status(200).json({ message: 'Profile created', profile: profile_created })
        }
    }
}

export const updateProfile = (req, res) => {
    res.json(req.body)
}
