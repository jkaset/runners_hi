import React, { useContext, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import { ActivityContext } from "../activities/ActivityProvider"
//import { Activity } from "../activities/Activity"

export const HomeList = (props) => {

  // (find function through activities.userId, if any match current user, return existing user home / else return new user home)


  const { activities, getActivities } = useContext(ActivityContext)

  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getActivities()
  }, [])



  const user = parseInt(localStorage.getItem('runnersHi_user'))
  console.log(user)

  const UserHome = 1111
  const GuestHome = 3


  let userHasActivities = activities.map(activity => activity.userId === user)
  console.log(userHasActivities)


  if (userHasActivities.includes(true, 0)) {
    return ( 
      <>
    <h3>Welcome back, User!</h3>
    <Link to="#" className="btn btn-primary">Track New Run</Link>
    <Link to="#" className="btn btn-primary">See Stats</Link>
      </>
    )
  } else {
    return (
    <>
    <h3>Hi User! Let's get started</h3>
    <div>
      <p>Training doesn't have to be about burning calories or beating your last segment. </p>
      <p>Runner's-Hi helps you track the effects of exercise on your mental well-being.</p> 
      <p>Getting started is easy! Before you head out for your run, we'll just ask you a few quick questions.</p>
    </div>
    <Link to="#" className="btn btn-primary">Let's get "hi"</Link>

    </>
    )
  }

  return <p>sup </p>


}