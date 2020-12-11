import React, {useContext} from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"

export const Activity = ({ activity, activityType, props }) => {
  const { deleteActivity } = useContext(ActivityContext)

  const activityToDelete = (activity) => {
    const activityId = activity.id

    deleteActivity(activityId)
  }
  let activityHeading = (activityType.name).toUpperCase()

  

  return (
    <section className="activity">
      <div className="activity__date">{activity.date}</div>
      <div className="activity__name">{activityHeading}</div>
      <div className="activity__moodPre">Pre-activity Mood: {activity.moodPre} out of 10</div>
      <div className="activity__moodPost">Post-activity Mood: {activity.moodPost} out of 10</div>
      <div className="activity__moodChange">Your mood quotient changed {((activity.moodPost-activity.moodPre)/10)*100}%</div>
      <div className="activity__note">Note: "{activity.note}"</div>


      <button
        onClick={() => {
          activityToDelete(activity)
        }}
      >Delete</button>

    </section>
  )
}

