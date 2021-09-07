import { withFormik, Field, ErrorMessage, Form } from 'formik';
import axios from "axios";

function Login(props) {

    const {
        isSubmitting,
        isValid,
    } = props;

    return(
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
                    <Field className="input" name="email" type="email" placeholder="Email"/>
                    <ErrorMessage ErrorMessage name="email">
                        {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                </div>
            </div>

            <div className="input-div">
                <div>
                    <Field className="input" name="password" type="password" placeholder="Password"/>
                    <ErrorMessage ErrorMessage name="password">
                        {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                </div>
            </div>  

            <a href='/'> Forgot your password? </a>

            <button 
                type="submit"
                className={`submit btn ${isSubmitting || !isValid ? 'disabled' : ''}`}
                disabled={isSubmitting || !isValid}>
                Sign In
            </button>
        </Form>
    );
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
        const user = await axios.post(`http://localhost:5000/api/login`, values);
        console.log(user);      
    }
})(Login);