import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Icon from '../../../assets/icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignupMutation } from '../../../redux/slices/auth/authApiSlice';

const Signup = () => {
    const [signup] = useSignupMutation();
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        dateOfBirth: Yup.date().required('Date of birth is required'),
        country: Yup.string().required('Country is required'),
        profession: Yup.string().required('Profession is required'),
    });

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        country: '',
        profession: '',
    };

    const handleSignup = async (values, { setSubmitting }) => {
        try {
            const res = await signup(values).unwrap();
            if (res?.status === 'success') {
                setTimeout(() => {
                    toast.success(res?.message || 'User registered successfully');
                    navigate('/login');
                }, 100);
            }
        } catch (error) {
            toast.error(error?.data?.message || error?.data?.error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="p-1">
            <div className="main__container">
                <div className="lock-icon">
                    <img src={Icon} alt="Icon" />
                </div>
                <h2>LAST FEW WORDS</h2>
                <p>Get started with us, sign up</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                    onSubmit={handleSignup}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-group">
                                <label>Name *</label>
                                <Field type="text" name="name" placeholder="Enter your name" />
                                <ErrorMessage name="name" component="div" className="auth_error_message" />
                            </div>

                            <div className="input-group">
                                <label>Email *</label>
                                <Field type="email" name="email" placeholder="Enter your email" />
                                <ErrorMessage name="email" component="div" className="auth_error_message" />
                            </div>

                            <div className="input-group">
                                <label>Password *</label>
                                <Field type="password" name="password" placeholder="Enter your password" />
                                <ErrorMessage name="password" component="div" className="auth_error_message" />
                            </div>

                            <div className="input-group">
                                <label>Confirm Password *</label>
                                <Field type="password" name="confirmPassword" placeholder="Confirm your password" />
                                <ErrorMessage name="confirmPassword" component="div" className="auth_error_message" />
                            </div>

                            <div className="input-group">
                                <label>Date of Birth *</label>
                                <Field type="date" name="dateOfBirth" placeholder="Select your date of birth" />
                                <ErrorMessage name="dateOfBirth" component="div" className="auth_error_message" />
                            </div>

                            <div className="input-group">
                                <label>Country *</label>
                                <Field type="text" name="country" placeholder="Enter your country" />
                                <ErrorMessage name="country" component="div" className="auth_error_message" />
                            </div>

                            <div className="input-group">
                                <label>Profession *</label>
                                <Field type="text" name="profession" placeholder="Enter your profession" />
                                <ErrorMessage name="profession" component="div" className="auth_error_message" />
                            </div>

                            <button type="submit" className="primary-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                            </button>

                            <p className='mt-1'>
                                Already have an account?
                                <Link className='link' to='/login'> Sign In</Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Signup;
