import { withFormik, Field, ErrorMessage, Form } from 'formik';
import axios from "axios";
import Swal from 'sweetalert';

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
                    <Field className="input" name="email" type="email" placeholder="email"/>
                    <ErrorMessage   ErrorMessage name="email">
                        {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                </div>
            </div>

            <div className="input-div">
                <div>
                    <Field className="input" name="password" type="password" placeholder="Password"/>
                    <ErrorMessage   ErrorMessage name="password">
                        {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                </div>
            </div>

            <button 
                type="submit"
                className={`submit btn ${isSubmitting || !isValid ? 'disabled' : ''}`}
                disabled={isSubmitting || !isValid}>
                Sign In
            </button>
        </Form>
    )    
};

export default withFormik({
    mapPropsToValues(props){
        return{
            email: '',
            password: ''
        };
    },

    validate(values) {
        const errors = {};

        if(!values.password) {
            errors.password = 'Password is required';
        } else if(values.password.length < 3){
            errors.password = 'Password must be at least 4 characters'
        }
        
        if(!values.email) {
            errors.email = 'Email is required';
        } 

        return errors;
    },

    async handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false);        
        const user = await axios.post(`http://localhost:5000/api/signup`, values);

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
        }
    }
})(Signup);