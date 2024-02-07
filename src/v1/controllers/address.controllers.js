import { validationResult } from 'express-validator'
import * as addressServices from '../services/address.services.js'
import errorMap from '../utils/error-map-handler.js'
import STATUS from '../enums/status-keys.js'

export const getAddressById = async (req, res) => {
    try {
        const data = await addressServices.getAddressById(req.session.user.id, req.params.id)
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

export const getAllAddressByUserId = async (req, res) => {
    try {
        const data = await addressServices.getAllAddressByUserId(
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

export const createAddress = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await addressServices.createAddress(
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

export const updateAddress = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send(errorMap(errors))
    } else {
        try {
            const data = await addressServices.updateAddress(
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

export const deleteAllAddressByUserId = async (req, res) => {
    try {
        const data = await addressServices.deleteAllAddressByUserId(
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

export const deleteAddress = async (req, res) => {
    try {
        const data = await addressServices.deleteAddress(req.session.user.id, req.params['id'])
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