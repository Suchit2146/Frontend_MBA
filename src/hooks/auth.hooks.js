import { useEffect } from "react";
import { TOKEN, USER_TYPES, userTypes } from "../utils/constants"
import signIn from "../api/auth.api"
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate()
    useEffect(() => {
        redirect();
    })
    const initialStates = {
        userId: "",
        password: ""
    }
    const redirect = () => {
        const userType = localStorage.getItem(USER_TYPES)
        const token = localStorage.getItem(TOKEN)
        console.log(userType);

        if (!userType || !token) {
            return
        }

        if (userType === userTypes.ADMIN) {
            navigate("/admin")
        }
        else if (userType === userTypes.CLIENT) {
            navigate("/client")
        } else {
            navigate("/customer")
        }
    }

    const onLogin = async (values, props) => {
        const userDetails = { userId: values.userId, password: values.password }
        const loginResponse = await signIn(userDetails)
        console.log(loginResponse);
        props.setSubmitting(false);
        props.setErrors({password:"Invalid Password"})
        redirect()
    }

    return { initialStates, onLogin }

}