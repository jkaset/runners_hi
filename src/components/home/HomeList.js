import React, { useContext, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import { ActivityContext } from "../activities/ActivityProvider"
import { UserContext } from "../users/UserProvider"
//import { Activity } from "../activities/Activity"

export const HomeList = (props) => {

  // (find function through activities.userId, if any match current user, return existing user home / else return new user home)

  const { activities, getActivities } = useContext(ActivityContext)
  const { users, getUsers } = useContext(UserContext)
  
  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getUsers()
    getActivities()
  }, [])


  const user = parseInt(localStorage.getItem('runnersHi_user'))
  console.log(user)

  let userHasActivities = activities.map(activity => activity.userId === user)
  console.log(userHasActivities)

  console.log(users)
  console.log(user)
   
  let userGreeting = users.map(currentUser=> {
    if (currentUser.id === user) {
      return currentUser.name
    }
  })
  
  // const userName = users.map(u=> {
  //   if (activities.userId === u) {
  //     console.log(u.name)
  //   }})

  const HomeOption = () => {

    if (userHasActivities.includes(true, 0)) {
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