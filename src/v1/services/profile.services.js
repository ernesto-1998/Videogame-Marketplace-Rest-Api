import pg from '../db/connection.js'
import { createUpdateQuery } from '../utils/create-dynamic-query.js'

export const getProfileByUserId = async (userId) => {
    try {
        const query = 'SELECT * FROM profile WHERE user_id = $1'
        const profile = await pg.query(query, [userId])
        return profile.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createProfile = async (body, userId) => {
    try {
        const hasUserProfile = await getProfileByUserId(userId)
        if (hasUserProfile) {
            return 'This user already has a profile...'
        }
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
        throw new Error(error)
    }
}

export const updateProfile = async (body, userId) => {
    try {
        const hasUserProfile = await getProfileByUserId(userId)
        if(!hasUserProfile) {
            return 'This user does not have a profile...'
        } else {
            const query = createUpdateQuery(Object.keys(body), 'profile')
            const values = [...Object.values(body), userId]
            const user_updated = await pg.query(query, values)
            console.log(user_updated)
            return user_updated.rows[0]
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteProfile = async (userId) => {
    try {
        const hasUserProfile = await getProfileByUserId(userId)
        if(!hasUserProfile) {
            return 'This user does not have a profile...'
        }
        const query = 'DELETE FROM profile WHERE user_id = $1 RETURNING *'
        const profileDeleted = await pg.query(query, [userId])
        return profileDeleted.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}
