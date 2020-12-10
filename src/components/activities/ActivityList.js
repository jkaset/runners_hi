import React, { useState, useContext, useEffect } from "react"
import { ActivityContext } from "./ActivityProvider"
import { Activity } from "./Activity"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import "./Activity.css"
import { Link } from "react-router-dom"

export const ActivityList = (props) => {
  const { activities, getActivities } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  //const [activity, setActivity] = useState({})

  useEffect(() => {
    console.log("ActivityList: Initial render before data")
    getActivityTypes().then(getActivities)
  }, [])

  
  const user = parseInt(localStorage.getItem("runnersHi_user"))
  
  //Mood math 
  

  let moodsPre = []
  
  const moodsPreTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    activities.forEach(activity => {
      if (activity.userId === user) {
        moodsPre.push(parseInt(activity.moodPre))
      }
      console.log(moodsPre)
    })

    return moodsPre.reduce(reducer);
  }

  let moodsPost = []
  const moodsPostTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    activities.forEach(activity => {
      if (activity.userId === user) {
        moodsPost.push(parseInt(activity.moodPost))
      }
      console.log(moodsPost)
    })

    return moodsPost.reduce(reducer)
  }

  const average = (moodsPostTotal() - moodsPreTotal())/moodsPre.length
  
  const ActivityMoodMath = () => {
    
    return average * 10

  }



  return (
    <>
    <div>
      <h3>Running changes your mood by <ActivityMoodMath />%</h3>
      <h4>Your Stats</h4>


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
</>
  )
}




