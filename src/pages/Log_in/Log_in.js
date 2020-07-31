import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import classes from './css/Log_in.module.css'
import Navbar from '../../components/Navbar/Navbar'

export default function Log_in() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabledState, setDisabledState] = useState(true)
    const [messageClasses, setMessageClasses] = useState(classes.hidden)
    const [errorClasses, setErrorClasses] = useState(classes.hidden)
    const [buttonClasses, setButtonClasses] = useState(classes.disabled)
    const [iconClasses, setIconClasses] = useState(classes.hidden)
    const form = useFormik({
        initialValues: {
            email: email,
            password: password,
            remember_me: false
        },
        onSubmit: values => {
            console.log('Form data: ', values)
        }
    })

    const [type, setType] = useState('password')
    const [iconURL, setIconURL] = useState('https://img.icons8.com/windows/64/000000/hide.png')
    const handlePasswordVisibility = () => {
        type === 'password' ? setType('text') : setType('password')
        iconURL === 'https://img.icons8.com/windows/64/000000/hide.png' ? setIconURL('https://img.icons8.com/windows/64/000000/visible.png') : setIconURL('https://img.icons8.com/windows/64/000000/hide.png')
    }
    const clearInput = () => {
        setEmail('')
        setIconClasses(`${classes.hidden}`)
    }
    const handleEmail = e => {
        let value = e.target.value
        if (value.trim() === '') {
            setIconClasses(`${classes.hidden}`)
        } else {
            setIconClasses(`${classes.clear}`)
        }
        setEmail(value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    useEffect(() => {
        if (email !== '') {
            if (password.length >= 6) {
                setDisabledState(false)
                setButtonClasses('')
            } else {
                setDisabledState(true)
                setButtonClasses(classes.disabled)
            }
        } else {
            setDisabledState(true)
            setButtonClasses(classes.disabled)
        }
        password.length < 6 && password !== '' ? setErrorClasses('') : setErrorClasses(classes.hidden)
    }, [email, password])
    const handleSubmit = event => {
        event.preventDefault()
        setButtonClasses(classes.hidden)
        setMessageClasses('')
    }
    return (
        <div className={classes.Log_in}>
            <Navbar />
            <div>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <h1>Login Form</h1>
                    <label className={classes.label} htmlFor="email">E-mail address</label>
                    <input className={classes.input} onChange={handleEmail} value={email} type="email" name='email' id='email' />
                    <img alt="x" onClick={clearInput} className={iconClasses} src="https://img.icons8.com/ios-glyphs/60/000000/delete-sign.png" />
                    <label className={classes.label} htmlFor="password">Password</label>
                    <input className={classes.input} onChange={handlePassword} value={password} type={type} name='password' id='password' />
                    <img alt="e" onClick={handlePasswordVisibility} className={classes.eye} src={iconURL} />
                    <h6 className={errorClasses}>Password must be at least 6 characters long</h6>
                    <label className={classes.checkbox_label} htmlFor="remember_me">
                        <input className={classes.remember_me} onChange={form.handleChange} value={form.values.remember_me} type="checkbox" id="remember_me" name="remember_me" />
                        <span className={`${classes.checkbox_custom} ${classes.rectangular}`}></span>
                    </label>
                    <p>Remember me</p>
                    <a href="#">Forgot password?</a>
                    <button className={buttonClasses} disabled={disabledState} type='submit'>Log in</button>
                    <h4 className={messageClasses}>Successfully signed in!</h4>
                </form>
                <NavLink exact to="/sign_up">Create an account</NavLink>
            </div>
        </div>
    )
}
