import pg from '../db/connection.js'

export const getProfileByUserId = async (userId) => {
    try {
        const query = 'SELECT * FROM profile WHERE user_id = $1'
        const profile = await pg.query(query, [userId])
        return profile.rows[0]
    } catch (error) {
        return error
    }
}

export const createProfile = async (body, userId) => {
    const isProfileUsed = await getProfileByUserId(userId)
    if (isProfileUsed) {
        return 'This user already has a profile...'
    }
    try {
        const { name, lastname, date_birth } = body
        const profile_pic = body.profile_pic || null
        const contact_email = body.contact_email || null
        const contact_number = body.contact_number || null
        const query =
            'INSERT INTO profile (user_id, name, lastname, date_birth, profile_pic, contact_email, contact_number) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'
        const values = [
            userId,
            name,
            lastname,
            date_birth,
            profile_pic,
            contact_email,
            contact_number,
        ]
        const profile_created = await pg.query(query, values)
        return profile_created.rows[0]
    } catch (error) {
        return error
    }
}
