import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert';

function Login() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return(
       <Formik
            initialValues = {{
                EMAIL: '',
                PASS: ''
            }}

            validate = {(values) => {
                const errors = {};

                if(!values.PASS) {
                    errors.PASS = 'Password is required';
                } else if(values.PASS.length < 3){
                    errors.PASS = 'Password must be at least 4 characters'
                }
                
                if(!values.EMAIL) {
                    errors.EMAIL = 'Email is required';
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.EMAIL)){
                    errors.EMAIL = 'Please validate email'
                }

                return errors;
            }} 

            onSubmit= {async (values, formikBag) => {
                setIsSubmitting(false);
                const user = await axios.post(`http://localhost:5000/api/login`, values);
                
                if(user.data.messaje === 'User not found'){
                    Swal({
                        title: 'User not found',
                        text: 'The user does not exist',
                        icon: 'error'
                    });
                } else if (user.data.messaje === "Password wrong"){
                    Swal({
                        title: 'Password wrong',
                        text: 'The password is incorrect',
                        icon: 'warning'
                    });
                } else {
                    window.location.href = './dashboard';
                }
            }}
       >
            {() => (
                
            <Form>
                <h1>Login</h1>
                <div className="social-container">
                    <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>Or use your account</span>

                <div className="input-div">
                    <div>
                        <Field 
                        className="input" 
                        name="EMAIL"
                        id="EMAIL"
                        type="email" 
                        placeholder="Email"
                        />
                        <ErrorMessage ErrorMessage name="EMAIL">
                            {message => <div className="error">{message}</div>}
                        </ErrorMessage>
                        
                    </div>
                </div>

                <div className="input-div">
                    <div>
                        <Field 
                        className="input" 
                        name="PASS"
                        id="PASS" 
                        type="password" 
                        placeholder="Password"
                        />

                        <ErrorMessage ErrorMessage name="PASS">
                            {message => <div className="error">{message}</div>}
                        </ErrorMessage>
                    </div>
                </div>  

                <a href='/'> Forgot your password? </a>

                <button 
                    type="submit"
                    className={`submit btn ${isSubmitting ? 'disabled' : ''}`}
                    disabled={isSubmitting}>
                    Sign In
                </button>
            </Form>
            )}
        </Formik>
    );
};

export default Login;