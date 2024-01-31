import * as genderServices from '../services/gender.services.js'

export const getGenders = async (req, res) => {
    try {
        const genders = await genderServices.getGenders()
        if (!genders) req.status(404).json({ status: 'no content' })
        else res.status(200).json(genders)
    } catch (error) {
        res.status(500).send(error)
    }
}