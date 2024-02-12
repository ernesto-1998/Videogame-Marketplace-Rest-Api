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

