import React, { useContext, useEffect, useState } from "react"
import { ActivityContext } from "./ActivityProvider"
import { Activity } from "./Activity"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import ActivityMoodMath from "./ActivityMoodMath"
import "./Activity.css"
import { Link } from "react-router-dom"
import { ActivityChart } from "./ActivityChart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'




export const ActivityList = () => {
  const { activities, searchTerms, getActivities, useActivities } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  useEffect(() => {
    getActivityTypes().then(useActivities).then(getActivities)
  }, [])
  const [ filteredActivites, setFiltered ] = useState([])
  const sortedActivities = useActivities(activities)
  //console.log(sortedActivities)

  useEffect(() => {
    if (searchTerms !== "") {
        // If the search field is not blank, display matching activities
        const subset = activities.filter(a => a.activityTypeId.toLowerCase().includes(searchTerms))
        setFiltered(subset)
    } else {
        // If the search field is blank, display all activities
        setFiltered(activities)
    }
}, [searchTerms, activities])




  const user = parseInt(localStorage.getItem("runnersHi_user"))
  const userActivities = activities.filter(a => a.userId === user)
  console.log(userActivities)
  //sort logic
  //

  if (userActivities.length >= 3) {
    return (
      <>

        <Link to="/activities/create" className="btn btn-light"><FontAwesomeIcon icon={faPlus} /> Record a New Run</Link>


        <div>
          <h3>Running changes your mood by <ActivityMoodMath />% </h3>
          <div className="chartContainer"><ActivityChart /></div>
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
        </div>

      </>
    )
  } else if (userActivities.length < 3 && userActivities.length > 0) {
    return (
      <>

        <Link to="/activities/create" className="btn  btn-warning"><FontAwesomeIcon icon={faPlus} /> Record a New Run</Link>


        <div>
          <h3>Running changes your mood by <ActivityMoodMath />% </h3>

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
        </div>

      </>
    )
  } else {
    return (
      <>
        <h4>Looks like you don't have any runs recorded yet! </h4>
        <div>
          <Link to="/activities/create" className="btn btn-secondary"><FontAwesomeIcon icon={faPlus} /> Record a New Run</Link>
        </div>

      </>
    )
  }
}


