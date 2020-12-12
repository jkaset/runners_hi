import React, { useContext, useEffect } from "react"
import { ActivityContext } from "./ActivityProvider"
import { Activity } from "./Activity"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import ActivityMoodMath from "./ActivityMoodMath"
import {Logout} from "../auth/Logout"
import "./Activity.css"
import { Link } from "react-router-dom"
import { ActivityChart } from "./ActivityChart"



export const ActivityList = () => {
  const { activities, getActivities, useActivities } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  useEffect(() => {
    getActivityTypes().then(useActivities).then(getActivities)
  }, [])

  const sortedActivities = useActivities(activities)
  //console.log(sortedActivities)
  const user = parseInt(localStorage.getItem("runnersHi_user"))
  const userActivities = activities.filter(a => a.userId === user)
  //console.log(userActivities)

  if (userActivities.length > 0) {
    return (
      <>
        <Logout />
       
        <div>
          <h3>Running changes your mood by <ActivityMoodMath />%</h3>
          <ActivityChart />
          <h4>Your Stats</h4>

        <div className="pre-scrollable">
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
        </div>
          <Link to="/activities/create" className="btn btn-secondary">Record a New Run</Link>
        </div>
      </>
    )
  } else {
    return (
      <>
       <Logout />
      <div>
      <Link to="/activities/create" className="btn btn-secondary">Record a New Run</Link>
      </div>
      </>
    )
  }
}


