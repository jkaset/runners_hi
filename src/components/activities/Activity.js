import React from "react"
import "./Activity.css"

export const Activity = ({ activity }) => (
 
  <section className="activity">
    <div className="activity__date">{activity.date}</div>
    <div className="activity__moodPre">{activity.moodPre}</div>
    <div className="activity__moodPost">{activity.moodPost}</div>
    <div className="activity__note">{activity.note}</div>
    <div className="activity__name">{activity.activityTypeId}</div>
  </section>
  
)