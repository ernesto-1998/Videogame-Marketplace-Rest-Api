export const createGetQuery = (table) => {
    return `SELECT * FROM ${table}`
}

export const createGetByIdQuery = (table, nameId) => {
    return `SELECT * FROM ${table} WHERE ${nameId} = $1`
}

export const createGetByEmailQuery = (table) => {
    return `SELECT * FROM ${table} WHERE email = $1`
}

export const createUpdateQuery = (keys, table, nameId) => {
    let counter = 1
    let initialQuery = 'UPDATE ' + table + ' SET '
    let centralQuery = ''
    let finalQuery = ''
    for (let index = 0; index < keys.length; index++) {
        if (index === keys.length - 1) {
            centralQuery = centralQuery + `${keys[index]}=$${counter} `
            counter = counter + 1
            continue
        }
        centralQuery = centralQuery + `${keys[index]}=$${counter}, `
        counter = counter + 1
    }
    finalQuery = `WHERE ${nameId}=$${counter} RETURNING *`
    return initialQuery + centralQuery + finalQuery
}

export const createInsertQuery = (keys, table) => {
    let counter = 1
    let initialQuery = 'INSERT INTO ' + table + ' ('
    let centralQuery = ''
    let finalQuery = ''
    for (let index = 0; index < keys.length; index++) {
        if (index === keys.length - 1) {
            centralQuery = centralQuery + `${keys[index]}) VALUES(`
            counter = counter + 1
            continue
        }
        centralQuery = centralQuery + `${keys[index]}, `
        counter = counter + 1
    }
    counter = 1
    for (let index = 0; index < keys.length; index++) {
        if (index === keys.length - 1) {
            finalQuery = finalQuery + `$${counter}) RETURNING *`
            counter = counter + 1
            continue
        }
        finalQuery = finalQuery + `$${counter}, `
        counter = counter + 1
    }
    return initialQuery + centralQuery + finalQuery
}

export const createDeleteAllByUserIdQuery = (table) => {
    return `DELETE FROM ${table} WHERE user_id = $1 RETURNING *`
}

export const createDeleteByIdQuery = (table, nameId) => {
    return `DELETE FROM ${table} WHERE ${nameId} = $1 RETURNING *`
}
;('INSERT INTO profile (user_id, name, lastname, date_birth, profile_pic, contact_email, contact_number) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *')
