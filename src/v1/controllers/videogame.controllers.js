import * as videogameServices from '../services/videogame.services.js'

export const getGenders = async (req, res) => {
    try {
        const genders = await videogameServices.getGenders()
        if (!genders) req.status(204).json({ status: 'no content' })
        else res.status(200).json(genders)
    } catch (error) {
        res.status(500).send(error)
    }
}
