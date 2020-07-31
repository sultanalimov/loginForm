import React from 'react'
import classes from './css/Home.module.css'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
    return (
        <div className={classes.Home}>
            <Navbar />
            <h1>Home Page</h1>
        </div>
    )
}
