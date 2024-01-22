import 'dotenv/config'
import pkg from 'pg'

const { Pool } = pkg

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

const user_roles = await pool.query('SELECT * FROM user_role')
const console_dictionary = await pool.query('SELECT * FROM console_dictionary')
const genders = await pool.query('SELECT * FROM gender')


const pg = {
    user_roles,
    console_dictionary,
    genders,
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },

}

export default pg

