import * as genderServices from '../services/gender.services.js'

import STATUS from '../enums/status-keys.js'

export const getGenders = async (req, res) => {
    try {
        const genders = await genderServices.getGenders()
        if (!genders) req.status(404).json({ status: STATUS.NO_CONTENT })
        else res.status(200).json({
            status: STATUS.GETS,
            genders})
    } catch (error) {
        res.status(500).send(error)
    }
}