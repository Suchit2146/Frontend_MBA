export const formValidator = (values) => {
    const errors = {};
    if (!values.userId) {
        errors.userId = "userId is Required"
    }
    if (!values.password) {
        errors.password = "password is Required"
    } else if (values.password.length < 5) {
        errors.password = "password shuld be of minimum 5 character"
    }

    return errors

}