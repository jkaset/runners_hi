import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
//import { ApplicationViews } from '../ApplicationViews'
//import logo from './logo.svg';
import { HomeList } from '../components/home/HomeList'
import { ActivityProvider} from '../components/activities/ActivityProvider'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () => (
    <>

        <Route render={() => {
            if (localStorage.getItem("runnersHi_user")) {
                return (
                    <>
                        <ActivityProvider>
                            <HomeList />
                        </ActivityProvider>
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
