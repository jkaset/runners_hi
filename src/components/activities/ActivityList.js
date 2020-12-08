import React, { useContext, useEffect } from "react"
import { ActivityContext } from "./ActivityProvider"
//import { Activity } from "./Activity"
import "./Activity.css"

export const ActivityList = () => {
  const { activities, getActivities } = useContext(ActivityContext)

  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getActivities()
  }, [])

  return (
    <h1>You made it to activities</h1>
  )
}