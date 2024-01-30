export const validateUserRole = (arr, id) => {
    return arr.some((x) => x.id === id)
}
