import React, { useContext, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import { ActivityContext } from "../activities/ActivityProvider"
import { UserContext } from "../users/UserProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faPlus } from '@fortawesome/free-solid-svg-icons';

export const HomeList = () => {
  
  //stuff from Providers I need
  const { activities, getActivities } = useContext(ActivityContext)
  const { users, getUsers } = useContext(UserContext)
  
  //This hook perfoms data fetching, and tells react I need to do something after render, runs after every render, every update
  useEffect(() => {
    
    getUsers()
    getActivities()
  }, [])

  //define logged in user
  const user = parseInt(localStorage.getItem('runnersHi_user'))
  //console.log(user)


  //function to include user's first name
  let userGreeting = users.map(currentUser=> {
    if (currentUser.id === user) {
      return currentUser.name
    }
  })
  
   
  let userHasActivities = activities.map(activity => activity.userId === user)
  //console.log(userHasActivities)
  //console.log(users)
  //console.log(user)

  const HomeOption = () => {
    //probably an easier way to do this, but userHasActivities goes through all activities, returns an array of true and falses, trues being 'this activity's user id is the user currently logged in,' so if the array includes one true for the user, the homepage for existing users should render. The '0' is at what indext the array method starts looking
    if (userHasActivities.includes(true, 0)) {
   
    return (
        <>
    
      <h1 className="home-heading">Welcome back, {userGreeting}!</h1>
      <div class="home-btn__group">
          <Link to="/activities/create" className="btn btn-dark btn-home"><FontAwesomeIcon icon={ faPlus }/>  Track New Run</Link>
          <Link to="/activities" className="btn btn-dark">
          <FontAwesomeIcon icon={ faChartLine }/>  See Stats</Link>
      </div>
        </>
      
          )
    } else {
      return (
        <>
          <h1>Hi {userGreeting}! Let's get started</h1>
          <div>
            <p>Training doesn't have to be about burning calories or beating your last segment. </p>
            <p>Runner's-Hi helps you track the effects of exercise on your mental well-being.</p>
            <p>Getting started is easy! Before you head out for your run, we'll just ask you a few quick questions.</p>
          </div>
          <Link to="/activities/create" className="btn btn-dark">
            Run  <FontAwesomeIcon icon={ faPlus }/></Link>

        </>
      )
    }
  }

  return <HomeOption />

}