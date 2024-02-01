import { validationResult } from 'express-validator'
import * as consoleServices from '../services/console.services.js'
import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getConsoleDictionary = async (req, res) => {
    try {
        const data = await consoleServices.getConsoleDictionary()
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

export const getConsoleById = async (req, res) => {
    try {
        const data = await consoleServices.getConsoleById(req.params.id)
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

export const getAllConsolesByUserId = async (req, res) => {
    try {
        const data = await consoleServices.getAllConsolesByUserId(
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

export const createConsole = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await consoleServices.createConsole(
                req.body,
                req.session.user.id
            )
            if (data) {
                res.status(404).json({ status: STATUS.NO_CONTENT })
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

export const updateConsole = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await consoleServices.updateConsole(
                req.body,
                req.params['id']
            )
            if (data.rows.length === 0) {
                res.status(404).json({ status: STATUS.NO_CONTENT })
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

export const deleteAllConsolesByUserId = async (req, res) => {
    try {
        const data = await consoleServices.deleteAllConsolesByUserId(
            req.session.user.id
        )
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
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

export const deleteConsole = async (req, res) => {
    try {
        const data = await consoleServices.deleteConsole(req.params['id'])
        if (data.rows.length === 0) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
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
