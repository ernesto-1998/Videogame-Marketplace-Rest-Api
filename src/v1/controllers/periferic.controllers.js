import { validationResult } from 'express-validator'
import * as perifericServices from '../services/periferic.services.js'
import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getPerifericById = async (req, res) => {
    try {
        const data = await perifericServices.getPerifericById(req.session.user.id, req.params.id)
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

export const getAllPerifericsByUserId = async (req, res) => {
    try {
        const data = await perifericServices.getAllPerifericsByUserId(
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

export const createPeriferic = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await perifericServices.createPeriferic(
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

export const updatePeriferic = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await perifericServices.updatePeriferic(
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

export const deleteAllPerifericsByUserId = async (req, res) => {
    try {
        const data = await perifericServices.deleteAllPerifericsByUserId(
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

export const deletePeriferic = async (req, res) => {
    try {
        const data = await perifericServices.deletePeriferic(req.session.user.id, req.params['id'])
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
