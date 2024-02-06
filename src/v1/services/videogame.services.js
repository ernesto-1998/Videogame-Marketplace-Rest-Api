import pg from '../db/connection.js'
import { poolConnection } from '../db/connection.js'

import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'
import entitieKeys from '../keys/entities-keys.js'

import {
    createDeleteAllByUserIdQuery,
    createDeleteByIdQuery,
    // createGetByIdQuery,
    createInsertQuery,
    createUpdateQuery,
} from '../utils/create-dynamic-query.js'

export const getVideogameById = async (videogameId) => {
    try {
        // const query = createGetByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME, 'id')
        const query = "SELECT v.*, array_agg(g.id) AS gender_ids, array_agg(g.name) AS gender_names FROM videogame v LEFT JOIN videogame_gender vg ON v.id = vg.videogame_id LEFT JOIN gender g ON vg.gender_id = g.id WHERE v.id = $1 GROUP BY v.id;"
        const data = await pg.query(query, [videogameId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllVideogamesByUserId = async (userId) => {
    try {
        // const query = createGetByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME, userId)
        const query = "SELECT v.*, array_agg(g.id) AS gender_ids, array_agg(g.name) AS gender_names FROM videogame v LEFT JOIN videogame_gender vg ON v.id = vg.videogame_id LEFT JOIN gender g ON vg.gender_id = g.id WHERE v.user_id = $1 GROUP BY v.id;"
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const createVideogame = async (body, userId) => {
    const cl = await poolConnection.connect()
    try {
        const mapBody = new Map(Object.entries(body))
        mapBody.set('user_id', userId)
        const genders = [...mapBody.get('genders')]
        mapBody.delete('genders')
        const query = createInsertQuery(
            [...mapBody.keys()],
            TABLE_SCHEMA_NAME.VIDEOGAME
        )
        const values = [...mapBody.values()]
        await cl.query('BEGIN')
        const data = await cl.query(query, values)
        for (let gender of genders) {
            const query2 = createInsertQuery(
                [...entitieKeys.videogame_gender],
                TABLE_SCHEMA_NAME.VIDEOGAME_GENDER
            )
            await cl.query(query2, [data.rows[0].id, gender])
        }
        await cl.query('COMMIT')
        return data
    } catch (error) {
        await cl.query('ROLLBACK')
        throw new Error(error)
    } finally {
        cl.release()
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
