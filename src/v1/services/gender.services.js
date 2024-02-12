import pg from '../db/connection.js'
import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'

import { createGetQuery } from '../utils/create-dynamic-query.js'

export const getGenders = async () => {
    try {
        const query = createGetQuery(TABLE_SCHEMA_NAME.GENDER)
        const data = await pg.query(query)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getVideogameByGender = async (genderId) => {
    try {
        const query = "SELECT v.* FROM videogame v JOIN videogame_gender vg ON v.id = vg.videogame_id WHERE vg.gender_id = $1;"
        const data = await pg.query(query, [genderId])
        return data
    } catch (error) {
        throw new Error(error)
    }
}
