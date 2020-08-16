import React, {useState} from 'react';
import {Formik, Form, Field, FormikValues, FormikProps} from 'formik';
import classes from './App.module.sass';
import Input from './components/Input/Input';
import * as Yup from 'yup';

export default function App() {
    const [isSubmitted, setToSubmitted] = useState(false);
    const initialValues = {
        email: '',
        password: '',
        remember_me: false
    };
    const onSubmit = (values: {email: string; password: string; remember_me: boolean}, onSubmitProps: any) => {
        onSubmitProps.resetForm();
        setToSubmitted(true);
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Required')
    });
    return (
        <div className={classes.App}>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {(login: FormikProps<FormikValues>) => {
                    console.log(login);
                    const onClear = () => {
                        login.setFieldValue('email', '');
                    };
                    return (
                        <div>
                            <Form className={classes.login}>
                                <h1>Login Form</h1>
                                <Input
                                    imgSrc={'https://img.icons8.com/ios-glyphs/60/000000/delete-sign.png'}
                                    imgCls={!login.values.email ? classes.hidden : classes.img}
                                    id={'email'}
                                    label={'E-mail address'}
                                    name={'email'}
                                    type={'email'}
                                    onClear={onClear}
                                />
                                <Input
                                    imgSrc={'https://img.icons8.com/windows/64/000000/hide.png'}
                                    imgCls={classes.img}
                                    id={'password'}
                                    label={'Password'}
                                    name={'password'}
                                    type={'password'}
                                />
                                <label className={classes.checkbox_label} htmlFor='remember_me'>
                                    <Field className={classes.remember_me} type='checkbox' id='remember_me' name='remember_me' />
                                    <span className={`${classes.checkbox_custom} ${classes.rectangular}`} />
                                </label>
                                <p className={classes.remember}>Remember me</p>
                                <a className={classes.forgot} href='/'>
                                    Forgot password?
                                </a>
                                <button
                                    type='submit'
                                    disabled={!(login.isValid && login.dirty)}
                                    className={
                                        !isSubmitted ? (!(login.isValid && login.dirty) ? classes.disabled : '') : classes.hidden
                                    }>
                                    Log in
                                </button>
                                <h4 className={isSubmitted ? classes.success : classes.hidden}>Successfully signed in!</h4>
                                <a className={classes.create} href='/'>
                                    Create an account
                                </a>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
}
