import pg from '../db/connection.js'

import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'
import {
    createDeleteAllByUserIdQuery,
    createDeleteByIdQuery,
    createGetByIdQuery,
    createInsertQuery,
    createUpdateQuery,
} from '../utils/create-dynamic-query.js'

export const getVideogameById = async (videogameId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME, 'id')
        const data = await pg.query(query, [videogameId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllVideogamesByUserId = async (userId) => {
    try {
        const query = createGetByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME, userId)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const createVideogame = async (body, userId) => {
    try {
        const mapBody = new Map(Object.entries(body))
        mapBody.set('user_id', userId)
        const query = createInsertQuery(
            [...mapBody.keys()],
            TABLE_SCHEMA_NAME.VIDEOGAME
        )
        const values = [...mapBody.values()]
        const data = await pg.query(query, values)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const updateVideogame = async (body, videogameId) => {
    try {
        const hasVideogame = await getVideogameById(videogameId)
        if (hasVideogame.rows.length === 0) {
            return 'This videogame does not exists...'
        } else {
            const mapBody = new Map(Object.entries(body))
            const query = createUpdateQuery(
                [...mapBody.keys()],
                TABLE_SCHEMA_NAME.VIDEOGAME,
                'id'
            )
            const values = [...mapBody.values(), videogameId]
            const data = await pg.query(query, values)
            return data
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteVideogame = async (videogameId) => {
    try {
        const hasVideogame = await getVideogameById(videogameId)
        if (hasVideogame.rows.length === 0) {
            return 'This videogames does not exists...'
        }
        const query = createDeleteByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME, 'id')
        const data = await pg.query(query, [videogameId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAllVideogamesByUserId = async (userId) => {
    try {
        const hasVideogame = await getAllVideogamesByUserId(userId)
        if (hasVideogame.rows.length === 0) {
            return 'This user does not have a videogames registered...'
        }
        const query = createDeleteAllByUserIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}
