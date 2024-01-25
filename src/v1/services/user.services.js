import pg from '../db/connection.js'

export const getUserRoles = () => {
    const query = 'SELECT * FROM user_role'
    return pg.query(query)
}

export const createUser = (body) => {
    const { email, password, user_role_id } = body
    const query =
        'INSERT INTO "user"(email, password, user_role_id) VALUES($1, $2, $3) RETURNING *'
    const values = [email, password, user_role_id]
    return pg.query(query, values)
}
