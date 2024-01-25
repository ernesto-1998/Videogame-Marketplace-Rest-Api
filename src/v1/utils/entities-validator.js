export const validateUserType = (arr, id) => {
    return arr.some((x) => x.id === id)
}
