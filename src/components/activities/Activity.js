import React, {useContext} from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"


export const Activity = ({ activity, activityType, props }) => {
  const { deleteActivity } = useContext(ActivityContext)


  const activityToDelete = (activity) => {
    const activityId = activity.id

    deleteActivity(activityId)
  }

  return (
    <section className="activity">
      <div className="activity__date">{activity.date}</div>
      <div className="activity__name">Activity Type: {activityType.name}</div>
      <div className="activity__moodPost">{activity.moodPost}</div>
      <div className="activity__note">{activity.note}</div>

      <div>Pre-{activityType.name} mood: {activity.moodPre} out of 10</div>

      <button
        onClick={() => {
          activityToDelete(activity)
          //   .then(() => {
          //     props.history.push("/activities")
          // })

        }}
      >Delete</button>

    </section>
  )
}

//<div className="activity__moodPre">Mood: {activity.moodPre}</div>
