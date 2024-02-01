import { validationResult } from 'express-validator'
import * as consoleServices from '../services/console.services.js'
import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getConsoleDictionary = async (req, res) => {
    try {
        const console_dictionary = await consoleServices.getConsoleDictionary()
        if (!console_dictionary) {
            req.status(404).json({ status: STATUS.NO_CONTENT })
        }
        else {
            res.status(200).json({
                status: STATUS.GETS,
                console_dictionary
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getConsoleById = async (req, res) => {
    try {
        const console_id = await consoleServices.getConsoleById(req.params.id)
        if (!console_id) {
            res.status(404).json({ status: STATUS.NO_CONTENT })
        }
        else {
            res.status(200).json({
                status: STATUS.GET,
                console_id,
            })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllConsolesByUserId = async (req, res) => {
    try {
        const consoles = await consoleServices.getAllConsolesByUserId(req.session.user.id)
        if (!consoles) {
            req.status(404).json({ status: STATUS.NO_CONTENT })
        }
        else {
            res.status(200).json({
                status: STATUS.GETS,
                consoles,
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
            const console = await consoleServices.createConsole(req.body, req.session.user.id)
            if (!console) {
                req.status(404).json({ status: STATUS.NO_CONTENT })
            }
            else {
                res.status(200).json({
                    status: STATUS.CREATE,
                    console,
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
            const updated_console = await consoleServices.updateConsole(req.body, req.params['id'])
            if (!updated_console) {
                req.status(404).json({ status: STATUS.NO_CONTENT })
            }
            else {
                res.status(200).json({
                    status: STATUS.UPDATE,
                    updated_console,
                })
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export const deleteAllConsolesByUserId = async (req, res) => {
    try {
       const deleted_consoles = await consoleServices.deleteAllConsolesByUserId(req.session.user.id) 
       if (!deleted_consoles) {
        req.status(404).json({ status: STATUS.NO_CONTENT })
       }
       else {
        res.status(200).json({
            status: STATUS.DELETES,
            deleted_consoles})
       }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteConsole = async (req, res) => {
    try {
       const deleted_console = await consoleServices.deleteConsole(req.params['id']) 
       if (!deleted_console) {
        req.status(404).json({ status: STATUS.NO_CONTENT })
       }
       else {
        res.status(200).json({
            status: STATUS.DELETE,
            deleted_console
        })
       }
    } catch (error) {
        res.status(500).json(error.message)
    }
}