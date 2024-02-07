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

export const getAddressById = async (userId, addressId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.ADDRESS, 'id')
        const data = await pg.query(query, [addressId])
        if(data.rows.length > 0){
            isErrorThrown(userId, data.rows[0]['user_id'], 'This address does not belong to this user')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllAddressByUserId = async (userId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.ADDRESS, 'user_id')
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const createAddress = async (body, userId) => {
    try {
        const mapBody = new Map(Object.entries(body))
        mapBody.set('user_id', userId)
        const query = createInsertQuery(
            [...mapBody.keys()],
            TABLE_SCHEMA_NAME.ADDRESS
        )
        const values = [...mapBody.values()]
        const data = await pg.query(query, values)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const updateAddress = async (userId ,body, addressId) => {
    try {
        const hasAddress = await getAddressById(userId, addressId)
        if (hasAddress.rows.length === 0) {
            return hasAddress
        } else {
            const mapBody = new Map(Object.entries(body))
            const query = createUpdateQuery(
                [...mapBody.keys()],
                TABLE_SCHEMA_NAME.ADDRESS,
                'id'
            )
            const values = [...mapBody.values(), addressId]
            const data = await pg.query(query, values)
            return data
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAddress = async (userId, addressId) => {
    try {
        const hasConsole = await getAddressById(userId, addressId)
        if (hasConsole.rows.length === 0) {
            return hasConsole
        }
        const query = createDeleteByIdQuery(TABLE_SCHEMA_NAME.ADDRESS, 'id')
        const data = await pg.query(query, [addressId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAllAddressByUserId = async (userId) => {
    try {
        const hasConsoles = await getAllAddressByUserId(userId)
        if (hasConsoles.rows.length === 0) {
            return hasConsoles
        }
        const query = createDeleteAllByUserIdQuery(TABLE_SCHEMA_NAME.CONSOLE)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}
