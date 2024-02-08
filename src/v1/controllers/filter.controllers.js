import * as filterServices from '../services/filter.services.js'

import STATUS from '../enums/status-keys.js'
import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'

export const filterPriceConsole = async (req, res) => {
    try {
        const data = await filterServices.filterPrice(TABLE_SCHEMA_NAME.CONSOLE, req.query)
        if(data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            status: STATUS.ERROR,
            message: error.message
        })
    }
}

export const filterPricePeriferic = async (req, res) => {
    try {
        const data = await filterServices.filterPrice(TABLE_SCHEMA_NAME.PERIFERIC, req.query)
        if(data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            status: STATUS.ERROR,
            message: error.message
        })
    }
}

export const filterPriceVideogame = async (req, res) => {
    try {
        const data = await filterServices.filterPrice(TABLE_SCHEMA_NAME.VIDEOGAME, req.query)
        if(data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            status: STATUS.ERROR,
            message: error.message
        })
    }
}

export const filterSoldUsedConsole = async (req, res) => {
    try {
        const data = await filterServices.filterIsSoldOrUsed(TABLE_SCHEMA_NAME.CONSOLE, req.query)
        if(data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            status: STATUS.ERROR,
            message: error.message
        })
    }
}

export const filterSoldUsedPeriferic = async (req, res) => {
    try {
        const data = await filterServices.filterIsSoldOrUsed(TABLE_SCHEMA_NAME.PERIFERIC, req.query)
        if(data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            status: STATUS.ERROR,
            message: error.message
        })
    }
}

export const filterSoldUsedVideogame = async (req, res) => {
    try {
        const data = await filterServices.filterIsSoldOrUsed(TABLE_SCHEMA_NAME.VIDEOGAME, req.query)
        if(data.rows.length === 0) {
            res.status(404).json({
                status: STATUS.NO_CONTENT
            })
        } else {
            res.status(200).json({
                status: STATUS.GET,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            status: STATUS.ERROR,
            message: error.message
        })
    }
}


