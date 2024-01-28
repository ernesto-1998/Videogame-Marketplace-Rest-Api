export const createUpdateQuery = (keys, table) => {
    let counter = 1
    let initialQuery = 'UPDATE ' + table +  ' SET '
    let centralQuery = ''
    let finalQuery = ''
    for(let index = 0; index < keys.length; index++) {
        if(index === keys.length - 1) {
            centralQuery = centralQuery + `${keys[index]}=$${counter} `
            counter = counter + 1;
            continue
        }
        centralQuery = centralQuery + `${keys[index]}=$${counter}, `
        counter = counter + 1;
    }
    finalQuery = `WHERE user_id=$${counter} RETURNING *`
    return initialQuery + centralQuery + finalQuery
}