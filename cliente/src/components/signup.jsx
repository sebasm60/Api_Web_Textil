import { withFormik, Field, ErrorMessage, Form } from 'formik';
import axios from "axios";
import Swal from 'sweetalert2';
const { urlConfig }  = require('../settings/settings');

function Signup(props) {

    const{
        isSubmitting,
        isValid
    } = props;

    return (
        <Form>
            <h1>Sign up</h1>

            <div className="input-div">
                <div>
                    <Field className="input" name="EMAIL" type="email" placeholder="email"/>
                    <ErrorMessage   ErrorMessage name="EMAIL">
                        {message => <div className="text-danger">{message}</div>}
                    </ErrorMessage>
                </div>
            </div>

            <div className="input-div">
                <div>
                    <Field className="input" name="PASS" type="password" placeholder="Password"/>
                    <ErrorMessage   ErrorMessage name="PASS">
                        {message => <div className="text-danger">{message}</div>}
                    </ErrorMessage>
                </div>
            </div>

            <button 
                type="submit"
                className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
                disabled={isSubmitting || !isValid}>
                Registrarse
            </button>
        </Form>
    )    
};

export default withFormik({
    mapPropsToValues(props){
        return{
            EMAIL: '',
            PASS: ''
        };
    },

    validate(values) {
        const errors = {};

        if(!values.PASS) {
            errors.PASS = 'Password is required';
        } else if(values.PASS.length < 3){
            errors.PASS = 'Password must be at least 4 characters'
        }
        
        if(!values.EMAIL) {
            errors.EMAIL = 'Email is required';
        } 

        return errors;
    },

    async handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false);        
        const user = await axios.post(`http://${urlConfig.HOST}:5000/api/signup`, values);

        if (user.data.error === 11000) {
            Swal({
                title: 'User already exists',
                text: 'The user has already been created',
                icon: 'warning'
            });
        } else {
            Swal({
                title: 'User created successfully',
                text: 'The user was created successfully',
                icon: 'success'
            })
        };
    }
})(Signup);