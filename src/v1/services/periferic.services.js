import pg from '../db/connection.js'
import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'

import {
    createDeleteAllByUserIdQuery,
    createDeleteByIdQuery,
    createGetByIdQuery,
    createInsertQuery,
    createUpdateQuery,
} from '../utils/create-dynamic-query.js'

import isErrorThrown from '../utils/error-throw.js'

export const getPerifericById = async (userId, perifericId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.PERIFERIC, 'id')
        const data = await pg.query(query, [perifericId])
        if(data.rows.length > 0){
            isErrorThrown(userId, data.rows[0]['user_id'], 'This periferic does not belong to this user')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllPerifericsByUserId = async (userId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.PERIFERIC, 'user_id')
        console.log(query)
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

export const updatePeriferic = async ( userId, body, perifericId) => {
    try {
        const hasPeriferics = await getPerifericById(userId, perifericId)
        if (hasPeriferics.rows.length === 0) {
            hasPeriferics
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

export const deletePeriferic = async (userId, perifericId) => {
    try {
        const hasPeriferics = await getPerifericById(userId, perifericId)
        if (hasPeriferics.rows.length === 0) {
            hasPeriferics
        }
        const query = createDeleteByIdQuery(TABLE_SCHEMA_NAME.PERIFERIC, 'id')
        const data = await pg.query(query, [perifericId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAllPerifericsByUserId = async (userId) => {
    try {
        const hasPeriferics = await getAllPerifericsByUserId(userId)
        if (hasPeriferics.rows.length === 0) {
            hasPeriferics
        }
        const query = createDeleteAllByUserIdQuery(TABLE_SCHEMA_NAME.PERIFERIC)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}
