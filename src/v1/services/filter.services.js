import pg from '../db/connection.js'

export const filterPrice = async (table, params) => {
    try {
        if(params.min && params.max) {
            const query = `SELECT * FROM ${table} WHERE price > ${params.min} AND price < ${params.max}`
            const data = await pg.query(query)
            return data
        } else if (params.min) {
            const query = `SELECT * FROM ${table} WHERE price > ${params.min}`
            const data = await pg.query(query)
            return data
        } else if (params.max) {
            const query = `SELECT * FROM ${table} WHERE price < ${params.max}`
            const data = await pg.query(query)
            return data
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const filterIsSoldOrUsed = async (table, params) => {
    try {
        if(params.sold && params.used) {
            const query = `SELECT * FROM ${table} WHERE is_sold = ${params.sold} AND is_used = ${params.used}`
            const data = await pg.query(query)
            return data
        } else if (params.sold) {
            const query = `SELECT * FROM ${table} WHERE is_sold = ${params.sold}`
            const data = await pg.query(query)
            return data
        } else if (params.used) {
            const query = `SELECT * FROM ${table} WHERE is_used = ${params.used}`
            const data = await pg.query(query)
            return data 
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const filterIsSold = (table, params) => {
    try {
        const query = `SELECT * FROM ${table} WHERE is_sold = ${params.sold}`
        const data = pg.query(query)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const filterIsUsed= (table, params) => {
    try {
        const query = `SELECT * FROM ${table} WHERE is_used = ${params.used}`
        const data = pg.query(query)
        return data
    } catch (error) {
        throw new Error(error)
    }
}