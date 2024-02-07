const isErrorThrown = (contition1, contition2, message) => {
    if(contition1 !== contition2) {
        throw new Error(message)
    } else {
        return
    }
}

export default isErrorThrown;