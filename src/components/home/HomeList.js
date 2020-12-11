import React, { useContext, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import { ActivityContext } from "../activities/ActivityProvider"
import { UserContext } from "../users/UserProvider"

export const HomeList = () => {

  const { activities, getActivities } = useContext(ActivityContext)
  const { users, getUsers } = useContext(UserContext)
  
  //This hook perfoms data fetching, and tells react I need to do something after render, runs after every render, every update
  useEffect(() => {
    
    getUsers()
    getActivities()
  }, [])

  const user = parseInt(localStorage.getItem('runnersHi_user'))
  //console.log(user)

  // let userHasActivities = activities.map(activity => activity.userId === user)
  // console.log(userHasActivities)
  //console.log(users)
  //console.log(user)
   
  const userActivities = activities.filter(a => a.userId === user)

  //function to include 
  let userGreeting = users.map(currentUser=> {
    if (currentUser.id === user) {
      return currentUser.name
    }
  })
  

  const HomeOption = () => {
    //probably an easier way to do this, but userHasActivities goes through all activities, returns an array of true and falses, trues being 'this activity's user id is the user currently logged in,' so if the array includes one true for the user, the homepage for existing users should render. The '0' is at what indext the array method starts looking
    //if (userHasActivities.includes(true, 0)) {
    if (userActivities > 0)  {
    return (
        <>
    
      <h3>Welcome back, {userGreeting}!</h3>
          <Link to="/activities/create" className="btn btn-secondary">Track New Run</Link>
          <Link to="/activities" className="btn btn-secondary">See Stats</Link>
        </>
      
          )
    } else {
      return (
        <>
          <h3>Hi {userGreeting}! Let's get started</h3>
          <div>
            <p>Training doesn't have to be about burning calories or beating your last segment. </p>
            <p>Runner's-Hi helps you track the effects of exercise on your mental well-being.</p>
            <p>Getting started is easy! Before you head out for your run, we'll just ask you a few quick questions.</p>
          </div>
          <Link to="/activities/create" className="btn btn-primary">
            Run</Link>

        </>
      )
    }
  }

  return <HomeOption />

}