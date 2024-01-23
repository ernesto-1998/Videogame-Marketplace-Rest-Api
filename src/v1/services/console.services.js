import pg from "../db/connection.js";

export const getConsoleDictionary = () => {
    return pg.query('SELECT * FROM console_dictionary')
}