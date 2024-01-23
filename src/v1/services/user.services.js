import pg from "../db/connection.js"

export const getUserRoles = async () => {
    return pg.query('SELECT * FROM user_role')
}

// const userServices = {
//     getUserRoles,
// }

// export default userServices