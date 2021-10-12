import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';

function Login() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function recordarPass(e){
        e.preventDefault();
        Swal.fire({
            title: 'Recordar contraseña',
        });
    }; 

    return(
       <Formik
            initialValues = {{
                email: '',
                pass: ''
            }}

            validate = {(values) => {
                const errors = {};

                if(!values.pass) {
                    errors.pass = 'Ingresa tu contraseña';
                } else if(values.pass.length < 3){
                    errors.pass = 'Password must be at least 4 characters'
                }
                
                if(!values.email) {
                    errors.email = 'Ingresa tu correo';
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                    errors.email = 'Revisa tu correo'
                }

                return errors;
            }} 

            onSubmit= {async (values, formikBag) => {
                setIsSubmitting(false);
                const user = await axios.post(`http://localhost:5000/api/login`, values);
                
                if(user.data.messaje === 'User not found'){
                    Swal.fire({
                        title: 'User not found',
                        text: 'The user does not exist',
                        icon: 'error'
                    });
                } else if (user.data.messaje === "Password wrong"){
                    Swal.fire({
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
                <span>Usa tu cuenta</span>

                <div className="input-div">
                    <div>
                        <Field 
                        className="input" 
                        name="email"
                        id="email"
                        type="email" 
                        placeholder="Email"
                        />
                        <ErrorMessage ErrorMessage name="email">
                            {message => <div className="text-danger">{message}</div>}
                        </ErrorMessage>
                        
                    </div>
                </div>

                <div className="input-div">
                    <div>
                        <Field 
                        className="input" 
                        name="pass"
                        id="pass" 
                        type="password" 
                        placeholder="Password"
                        />

                        <ErrorMessage ErrorMessage name="pass">
                            {message => <div className="text-danger">{message}</div>}
                        </ErrorMessage>
                    </div>
                </div>  

                <a href=" " onClick={recordarPass}>¿Olvidaste tu contraseña?</a>

                <button 
                    type="submit"
                    className={`submit ${isSubmitting ? 'disabled' : ''}`}
                    disabled={isSubmitting}>
                    Conectar
                </button>
            </Form>
            )}
        </Formik>
    );
};

export default Login;