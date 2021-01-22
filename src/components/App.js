import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { ApplicationViews } from './ApplicationViews'
import { Logo } from './Logo';
import { Footer } from './home/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

export const App = () => (
    <>
        <Logo />
        <Container fluid> 

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

        <Footer />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        </Container>

    </>
)
