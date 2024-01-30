const errorMap = (errors) => {
    return errors.errors.map((error) => {
        return {
            path: error.path,
            value: error.value,
            message: error.msg,
        }
    })
}

export default errorMap
