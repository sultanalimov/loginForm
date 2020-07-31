import React from 'react'
import classes from './css/Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={classes.Navbar}>
            <NavLink activeClassName={classes.active} exact to="/">Home</NavLink>
            <NavLink activeClassName={classes.active} exact to="/log_in">Log in</NavLink>
            <NavLink activeClassName={classes.active} exact to="/sign_up">Sign up</NavLink>
        </nav>
    )
}
