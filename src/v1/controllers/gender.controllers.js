import * as genderServices from '../services/gender.services.js'

import STATUS from '../enums/status-keys.js'

export const getGenders = async (req, res) => {
    try {
        const data = await genderServices.getGenders()
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        }
        else {
            res.status(200).json({
                status: STATUS.GETS,
                data})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}