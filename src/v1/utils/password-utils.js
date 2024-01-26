import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    return bcrypt.hash(password, 13)
}

export const comparePassword = (password1, password2) => {
    return bcrypt.compare(password1, password2)
}
