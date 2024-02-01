import pg from '../db/connection.js'
import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'

import {
    createDeleteAllByUserIdQuery,
    createDeleteByIdQuery,
    createGetByIdQuery,
    createInsertQuery,
    createUpdateQuery,
} from '../utils/create-dynamic-query.js'

export const getPerifericById = async (perifericId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.PERIFERIC, 'id')
        const data = await pg.query(query, [perifericId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllPerifericByUserId = async (userId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.PERIFERIC, userId)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const createPeriferic = async (body, userId) => {
    try {
        const mapBody = new Map(Object.entries(body))
        mapBody.set('user_id', userId)
        const query = createInsertQuery(
            [...mapBody.keys()],
            TABLE_SCHEMA_NAME.PERIFERIC
        )
        const values = [...mapBody.values()]
        const data = await pg.query(query, values)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const updatePeriferic = async (body, perifericId) => {
    try {
        const hasPeriferics = await getPerifericById(perifericId)
        if (hasPeriferics.rows.length === 0) {
            return 'This periferic does not exists...'
        } else {
            const mapBody = new Map(Object.entries(body))
            const query = createUpdateQuery(
                [...mapBody.keys()],
                TABLE_SCHEMA_NAME.PERIFERIC,
                'id'
            )
            const values = [...mapBody.values(), perifericId]
            const data = await pg.query(query, values)
            return data
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const deletePeriferic = async (perifericId) => {
    try {
        const hasPeriferics = await getPerifericById(perifericId)
        if (hasPeriferics.rows.length === 0) {
            return 'This periferic does not exists...'
        }
        const query = createDeleteByIdQuery(TABLE_SCHEMA_NAME.PERIFERIC, 'id')
        const data = await pg.query(query, [perifericId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAllCPerifericsByUserId = async (userId) => {
    try {
        const hasPeriferics = await getAllPerifericByUserId(userId)
        if (hasPeriferics.rows.length === 0) {
            return 'This user does not have a periferics registered...'
        }
        const query = createDeleteAllByUserIdQuery(TABLE_SCHEMA_NAME.PERIFERIC)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}
