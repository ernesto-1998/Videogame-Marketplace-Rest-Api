import pg from '../db/connection.js'
import { hashPassword, comparePassword } from '../utils/password-utils.js'

export const getUserRoles = () => {
    const query = 'SELECT * FROM user_role'
    return pg.query(query)
}

export const getUserByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM "user" WHERE email = $1'
        const user = await pg.query(query, [email])
        return user.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createUser = async (body) => {
    try {
        let { email, password, user_role_id } = body
        const isEmailUsed = await getUserByEmail(email)
        if (isEmailUsed) {
            return 'Email is already registered...'
        }
        password = await hashPassword(password)
        const query =
            'INSERT INTO "user"(email, password, user_role_id) VALUES($1, $2, $3) RETURNING *'
        const values = [email, password, user_role_id]
        const user_created = await pg.query(query, values)
        return user_created.rows[0]
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
