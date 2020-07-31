import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Log_in from './pages/Log_in/Log_in'
import Sign_up from './pages/Sing_up/Sign_up'

export default function App() {
  return (
    <>
      <Route exact component={Home} path="/" />
      <Route exact component={Log_in} path="/log_in" />
      <Route exact component={Sign_up} path="/sign_up" />
    </>
  )
}
