

const signupController = (req, res) => {
    res.json({
        route: 'User'
    })
}

const loginController = (req, res) => {
    res.json({
        status: 'Logeado'
    })
}

const userController = {
    signupController,
    loginController,
}

export default userController