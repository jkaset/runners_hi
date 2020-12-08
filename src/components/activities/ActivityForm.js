import React, { useContext, useRef, useEffect } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Link } from "react-router-dom"
//import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
//import { Activity } from "./Activity"

export const ActivityForm = (props) => {
  const { activities, addActivity } = useContext(ActivityContext)
  // const { activityTypes, getActivityType } = useContext(ActivityTypeContext)

  // const date = useRef(null)
  // const activityType = useRef(null)
  // const moodPre = useRef(null)
  // const moodPost = useRef(null)
  // const note = useRef(null)

  useEffect(() => {
    addActivity()
  }, [])
 
  // const logNewActivity = () => {
  //   const activityTypeId = parseInt(activityType.current.value)
  //   console.log(activityTypeId)

    return (
      <>
      <h1>You made it to ACTIVITY FORM</h1>
      <Link to="/activities" className="btn btn-primary">Log it!</Link>
      </>
    )
  //}
}