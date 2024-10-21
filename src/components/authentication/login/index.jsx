import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Icon from '../../../assets/icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../redux/slices/auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../redux/slices/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state?.auth);

    useEffect(() => {
        if (userInfo?.token) {
            navigate('/dashboard');
        }
    }, [userInfo]);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').max(255).required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const handleLogin = async (values, { setSubmitting }) => {
        try {
            const res = await login(values).unwrap();
            if (res?.status === 'success') {
                dispatch(setCredentials({ ...res?.data }));
                toast.success(res?.message || 'Logged in successfully');
                navigate('/dashboard');
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
                <p>Login to access your Dashboard</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                    onSubmit={handleLogin}
                >
                    {({ isSubmitting }) => (
                        <Form>
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

                            <button type="submit" className="primary-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Signing In...' : 'Sign In'}
                            </button>

                            <p className='mt-1'>
                                Don't have an account?
                                <Link className='link' to='/signup'> Register </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
