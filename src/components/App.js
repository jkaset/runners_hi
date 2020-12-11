import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { ApplicationViews } from './ApplicationViews'
import { Logo } from './Logo';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
    <>
         <Logo />
         
        <Route render={() => {
            if (localStorage.getItem("runnersHi_user")) {
                return (
                    <>
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />

    </>
)
