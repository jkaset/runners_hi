import React, { useContext, useEffect } from "react"
import { ActivityContext } from "./ActivityProvider"
//import { Activity } from "./Activity"
import "./Activity.css"
import { Link } from "react-router-dom"

export const ActivityList = () => {
  const { activities, getActivities } = useContext(ActivityContext)

  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getActivities()
  }, [])

  return (
    <>
    <h1>You made it to SAVED ACTIVITIES</h1>
    <Link to="/activities/create" className="btn btn-primary">Record a New Run</Link>
    </>
  )
}