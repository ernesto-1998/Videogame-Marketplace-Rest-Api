import { validationResult } from 'express-validator'

import * as videogameServices from '../services/videogame.services.js'

import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getAllVideogames = async (req, res) => {
    try {
        const data = await videogameServices.getAllVideogames()
        if(data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
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

export const getVideogameById = async (req, res) => {
    try {
        const data = await videogameServices.getVideogameById(req.session.user.id, req.params.id)
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
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

export const getAllVideogamesByUserId = async (req, res) => {
    try {
        const data = await videogameServices.getAllVideogamesByUserId(
            req.session.user.id
        )
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        } else {
            res.status(200).json({
                status: STATUS.GETS,
                data,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const createVideogame = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await videogameServices.createVideogame(
                req.body,
                req.session.user.id
            )
            if (data.rows.length === 0) {
                res.status(404).json({ status: STATUS.ERROR })
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

export const updateVideogame = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await videogameServices.updateVideogame(
                req.session.user.id,
                req.body,
                req.params['id']
            )
            if (data.rows.length === 0) {
                res.status(404).json({ status: STATUS.ERROR })
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
}

export const deleteAllVideogamesByUserId = async (req, res) => {
    try {
        const data = await videogameServices.deleteAllVideogamesByUserId(
            req.session.user.id
        )
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.ERROR })
        } else {
            res.status(200).json({
                status: STATUS.DELETES,
                data,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteVideogame = async (req, res) => {
    try {
        const data = await videogameServices.deleteVideogame(req.session.user.id, req.params['id'])
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.ERROR })
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
