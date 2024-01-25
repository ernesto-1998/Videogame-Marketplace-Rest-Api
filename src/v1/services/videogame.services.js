import pg from '../db/connection.js'

export const getGenders = () => {
    return pg.query('SELECT * FROM gender')
}
