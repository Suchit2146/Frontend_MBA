import { Field, Formik, Form, ErrorMessage } from "formik";
import { formValidator } from '../validators/auth.form.validator';
import { useAuth } from "../hooks/auth.hooks"

function Auth() {
    const { initialStates, onLogin } = useAuth();
    return (
        <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-center text-white">
            <div style={{ border: "1px solid white" }} className="p-5">
                <div className="row">
                    <h2>Login</h2>
                    <div>
                        <Formik
                            initialValues={initialStates}
                            validate={formValidator}
                            onSubmit={onLogin}
                        >
                            {({ isSubmitting }) => (
                                <form className="d-flex flex-column justify-content-center align-items-center">
                                    <Field
                                        type="text"
                                        name="userId"
                                        placeholder="enter your userId"
                                        className="form-control m-2"
                                    />
                                    <ErrorMessage name="userId" component="div" />

                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="enter password"
                                        className="form-control m-2"
                                    />
                                    <ErrorMessage name="password" component="div" />
                                    <button className="form-control m-2" type="submit" disabled={isSubmitting}>Submit</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Auth;