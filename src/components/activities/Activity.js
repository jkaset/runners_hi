import React from "react"
import "./Activity.css"

export const Activity = ({ activity }) => (
  <section className="activity">
    <h3 className="activity__id">Id: {activity.id}</h3>
    <div className="activity__name">{activity.name}</div>
  </section>
)