import React, {useContext, useEffect} from "react"
import "./Home.css"
import { ActivityContext } from "../activities/ActivityProvider"
//import { UserContext } from "./users/UserProvider"

export const HomeList = () => {
  
  //(find function through activities.userId, if any match current user, return existing user home / else return new user home)
  const {activities, getActivities} = useContext(ActivityContext)

  useEffect(() => {
    getActivities()
  }, [])
  //const {users, getUsers} = useContext(UserContext)
  const user = parseInt(localStorage.getItem("runnersHi_user"))

if (activities.find(activity => activity.userId === user))
  return (
    <h1>you're home</h1>
  )
}