import pg from '../db/connection.js'
import { hashPassword, comparePassword } from '../utils/password-utils.js'
import * as dq from '../utils/create-dynamic-query.js'
import TABLE_SCHEMA_NAME from '../enums/entities-keys.js'

export const getUserRoles = async () => {
    try {
        const query = dq.createGetQuery(TABLE_SCHEMA_NAME.USER_ROLE)
        const data = await pg.query(query)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getUserByEmail = async (email) => {
    try {
        const query = dq.createGetByEmailQuery(TABLE_SCHEMA_NAME.USER)
        const data = await pg.query(query, [email])
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllUsers = async () => {
    try {
        const query = dq.createGetQuery(TABLE_SCHEMA_NAME.USER)
        const data = await pg.query(query)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const createUser = async (body) => {
    try {
        let { email, password } = body
        const isEmailUsed = await getUserByEmail(email)
        if (isEmailUsed.rows.length > 0) {
            throw new Error('This email is already registered...')
        }
        password = await hashPassword(password)
        const mapBody = new Map(Object.entries(body))
        mapBody.set('password', password)
        const query = dq.createInsertQuery(
            [...mapBody.keys()],
            TABLE_SCHEMA_NAME.USER
        )
        const values = [...mapBody.values()]
        const data = await pg.query(query, values)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const loginUser = async (body) => {
    let { email, password } = body
    let data = await getUserByEmail(email)
    if (data.rows.length === 0) {
        throw new Error("User does not exists...")
    } else {
        const isValid = await comparePassword(password, data.rows[0].password)
        if (!isValid) {
            throw new Error("Email or password incorrect..")
        } else {
            return data
        }
    }
}
