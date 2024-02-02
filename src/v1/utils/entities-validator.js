export const validateIdExists = (arr, id) => {
    return arr.some((x) => x.id === id)
}
