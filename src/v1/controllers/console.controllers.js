import * as consoleServices from '../services/console.services.js'

export const getConsoleDictionary = async (req, res) => {
    try {
        const console_dictionary = await consoleServices.getConsoleDictionary()
        if (!console_dictionary) req.status(204).json({status: 'no content'});
        else res.status(200).json(console_dictionary)
    } catch (error) {
        res.status(500).send(error)
    }
}

