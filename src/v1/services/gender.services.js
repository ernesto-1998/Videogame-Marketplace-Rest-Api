import pg from '../db/connection.js'

import { createGetQuery } from '../utils/create-dynamic-query.js'

const TABLE_SCHEMA_NAME = 'public.gender'

export const getGenders = async () => {
    try {
        const query = createGetQuery(TABLE_SCHEMA_NAME)
        const genders = await pg.query(query)
        return genders.rows
    } catch (error) {
        throw new Error(error)
    }
}