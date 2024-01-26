import * as profileServices from '../services/profile.services.js'

export const getProfileByUserId = async (req, res) => {
    try {
        const profile = await profileServices.getProfileByUserId(1)
        if (!profile) {
            res.status(204).json({
                message: 'There is no profile for this user...',
            })
        } else {
            res.json({
                message: 'Profile found',
                profile: profile,
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
