import React from "react"
import "./Activity.css"

export const Activity = ({ activity, activityType }) => (
 
  <section className="activity">
    <div className="activity__date">{activity.date}</div>
    <div className="activity__name">Activity Type: {activityType.name}</div>
    <div className="activity__moodPost">{activity.moodPost}</div>
    <div className="activity__note">{activity.note}</div>
    
<div>Pre-{activityType.name} mood: {activity.moodPre} out of 10</div>
  </section>
  
)

//<div className="activity__moodPre">Mood: {activity.moodPre}</div>
