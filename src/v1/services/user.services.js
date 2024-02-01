import pg from '../db/connection.js'
import { hashPassword, comparePassword } from '../utils/password-utils.js'
import * as dq from '../utils/create-dynamic-query.js'

const TABLE_SCHEMA_NAME = 'public.user'

export const getUserRoles = async () => {
    try {
        const query = dq.createGetQuery('public.user_role')
        const user_roles = await pg.query(query)
        return user_roles.rows
    } catch (error) {
        throw new Error(error)
    }
}

export const getUserByEmail = async (email) => {
    try {
        const query = dq.createGetByEmailQuery(TABLE_SCHEMA_NAME)
        const user = await pg.query(query, [email])
        return user.rows
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllUsers = async () => {
    try {
        const query = dq.createGetQuery(TABLE_SCHEMA_NAME)
        const users = await pg.query(query)
        return users.rows
    } catch (error) {
        throw new Error(error)
    }
}

export const createUser = async (body) => {
    try {
        let { email, password } = body
        const isEmailUsed = await getUserByEmail(email)
        if (isEmailUsed) {
            return 'Email is already registered...'
        }
        password = await hashPassword(password)
        const mapBody = new Map(Object.entries(body))
        mapBody.set('password', password)
        const query = dq.createInsertQuery([...mapBody.keys()], TABLE_SCHEMA_NAME)
        const values = [...mapBody.values()]
        const user_created = await pg.query(query, values)
        return user_created.rows
    } catch (error) {
        throw new Error(error)
    }
}

export const loginUser = async (body) => {
    let { email, password } = body
    let user = await getUserByEmail(email)
    if (!user) {
        return 'Email or password incorrect'
    } else {
        const isValid = await comparePassword(password, user.password)
        if (!isValid) {
            return 'Wrong password...'
        } else {
            return user
        }
    }
}
