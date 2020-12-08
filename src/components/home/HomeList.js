import React, {useContext, useEffect} from "react"
import "./Home.css"
import { ActivityContext } from "../activities/ActivityProvider"
//import { Activity } from "../activities/Activity"

export const HomeList = () => {
  
  // (find function through activities.userId, if any match current user, return existing user home / else return new user home)
  const user = parseInt(localStorage.getItem("runnersHi_user"))
  console.log(user)

  const {activities, getActivities} = useContext(ActivityContext)
  
  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getActivities()
  }, [])

 


//if (activities.find(activity => activity.userId === user))
  return (
    <h1>you're home</h1>
  )
}