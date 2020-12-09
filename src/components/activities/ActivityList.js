import React, { useState, useContext, useEffect } from "react"
import { ActivityContext } from "./ActivityProvider"
import { Activity } from "./Activity"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import "./Activity.css"
import { Link } from "react-router-dom"

export const ActivityList = (props) => {
  const { activities, getActivities } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  const [activity, setActivity] = useState({})

  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getActivityTypes().then(getActivities)
  }, [])

  // useEffect(() => {
  //   const activityType = activityTypes.find(at => at.id === activity.activityTypeId) || {}
  //   setActivity(activityType)
  // }, [activityTypes])

  // useEffect(() => {
  //   const activity = activities.find(a => a.id === parseInt(props.match.params.activityId)) || {}
  //   setActivity(activity)
  // }, [activities])

  const user = parseInt(localStorage.getItem("runnersHi_user"))

  return (
    <div>
      <h2>Your activities</h2>


      {
        activities.map(activity => {
          if (activity.userId === user) {
            const activityType = activityTypes.find(type => type.id === activity.activityTypeId)

            return <Activity key={activity.id}
              activity={activity}
              activityType={activityType}
            />
          }
        })}

      <Link to="/activities/create" className="btn btn-secondary">Record a New Run</Link>
    </div>

  )
}

// return (
//   <>
//   <h1>You made it to SAVED ACTIVITIES</h1>
//   <Link to="/activities/create" className="btn btn-secondary">Record a New Run</Link>
//   </>
// )
