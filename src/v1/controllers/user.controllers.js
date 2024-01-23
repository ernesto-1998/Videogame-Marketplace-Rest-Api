import * as userServices from "../services/user.services.js"

export const getUserRoles = async (req, res) => {
    try {
        const user_roles = await userServices.getUserRoles()
        if (!user_roles) req.status(204).json({status: 'no content'});
        else res.status(200).json(user_roles.rows)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const signupController = (req, res) => {
    res.json({
        route: 'User'
    })
}

export const loginController = (req, res) => {
    res.json({
        status: 'Logeado'
    })
}

export const createProfile = (req, res) => {
    res.json(req.body)
}

// const userControllers = {
//     signupController,
//     loginController,
//     getUserRoles,
//     createProfileController
// }

// export default userControllers