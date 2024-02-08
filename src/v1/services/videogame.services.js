import pg from '../db/connection.js'
import { poolConnection } from '../db/connection.js'

import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'

import {
    createDeleteAllByUserIdQuery,
    createDeleteByIdQuery,
    createInsertQuery,
    createUpdateQuery,
} from '../utils/create-dynamic-query.js'
import isErrorThrown from '../utils/error-throw.js'

export const getVideogameById = async (userId, videogameId) => {
    try {
        const query = "SELECT v.*, array_agg(g.id) AS gender_ids, array_agg(g.name) AS gender_names FROM videogame v LEFT JOIN videogame_gender vg ON v.id = vg.videogame_id LEFT JOIN gender g ON vg.gender_id = g.id WHERE v.id = $1 GROUP BY v.id;"
        const data = await pg.query(query, [videogameId])
        if(data.rows.length > 0){
            isErrorThrown(userId, data.rows[0]['user_id'], 'This videogame does not belong to this user')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllVideogamesByUserId = async (userId) => {
    try {
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
        const query2 = "INSERT INTO videogame_gender (videogame_id, gender_id) VALUES ($1, unnest($2::integer[])) ON CONFLICT DO NOTHING;"
        await cl.query(query2, [data.rows[0].id, genders])
        await cl.query('COMMIT')
        return data
    } catch (error) {
        await cl.query('ROLLBACK')
        throw new Error(error)
    } finally {
        cl.release()
    }
}

export const updateVideogame = async ( userId, body, videogameId) => {
    try {
        const hasVideogame = await getVideogameById(userId, videogameId)
        if (hasVideogame.rows.length === 0) {
            return hasVideogame
        } else {
            const cl = await poolConnection.connect()
            try {
                if(body.genders !== undefined){
                    const mapBody = new Map(Object.entries(body))
                    const genders = [...mapBody.get('genders')]
                    mapBody.delete('genders')
                    if (mapBody.size > 0) {
                        const query = createUpdateQuery(
                            [...mapBody.keys()],
                            TABLE_SCHEMA_NAME.VIDEOGAME,
                            'id'
                        )
                        const values = [...mapBody.values(), videogameId]
                        await cl.query('BEGIN')
                        const data = await cl.query(query, values)
                        const query2 = createDeleteByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME_GENDER, 'videogame_id')
                        await cl.query(query2, [videogameId]) 
                        const query3 = `INSERT INTO ${TABLE_SCHEMA_NAME.VIDEOGAME_GENDER} (videogame_id, gender_id) VALUES ($1, unnest($2::integer[])) ON CONFLICT DO NOTHING;`
                        await cl.query(query3, [data.rows[0].id, genders])
                        await cl.query('COMMIT')
                        return data
                    } else {
                        await cl.query('BEGIN')
                        const query2 = createDeleteByIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME_GENDER, 'videogame_id')
                        await cl.query(query2, [videogameId]) 
                        const query3 = `INSERT INTO ${TABLE_SCHEMA_NAME.VIDEOGAME_GENDER} (videogame_id, gender_id) VALUES ($1, unnest($2::integer[])) ON CONFLICT DO NOTHING RETURNING *;`
                        const data2 = await cl.query(query3, [videogameId, genders])
                        await cl.query('COMMIT')
                        return data2
                    }
                } else {
                    const mapBody = new Map(Object.entries(body))
                    const query = createUpdateQuery(
                        [...mapBody.keys()],
                        TABLE_SCHEMA_NAME.VIDEOGAME,
                        'id'
                    )
                    const values = [...mapBody.values(), videogameId]
                    await cl.query('BEGIN')
                    const data = await cl.query(query, values)
                    await cl.query('COMMIT')
                    return data
                }

            } catch (error) {
                await cl.query('ROLLBACK')
                throw new Error(error)
            } finally {
                cl.release()
            }
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteVideogame = async (userId, videogameId) => {
    try {
        const hasVideogame = await getVideogameById(userId, videogameId)
        if (hasVideogame.rows.length === 0) {
            return hasVideogame
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
            return hasVideogame
        }
        const query = createDeleteAllByUserIdQuery(TABLE_SCHEMA_NAME.VIDEOGAME)
        const data = await pg.query(query, [userId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}
