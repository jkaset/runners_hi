import React, { useContext, useEffect } from "react"
import "./Home.css"
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
    return <h3>Welcome back</h3>
  } else {
    return <h3>Track a new activity</h3>
  }

  return <p>sup </p>


}