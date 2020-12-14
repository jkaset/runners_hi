import React, { useContext } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Card, Accordion, Button } from "react-bootstrap"
export const Activity = ({ activity, activityType }) => {
  const { deleteActivity } = useContext(ActivityContext)

  //logic for finding activityType is in ActivityList map function

  const activityToDelete = (activity) => {
    const activityId = activity.id

    deleteActivity(activityId)
  }

  //all-caps activity type
  let activityHeading = (activityType.name).toUpperCase()
  //{activityType.name}


  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div>
                {activity.date}
                {activityHeading}
                {((activity.moodPost - activity.moodPre) / 10) * 100}%
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <section className="activity">
                  <div className="activity__date">{activity.date}</div>
                  <div className="activity__name">{activityHeading}</div>
                  <div className="activity__moodPost">Post-activity Mood: {activity.moodPost} out of 10</div>
                  <div className="activity__moodPre">Pre-activity Mood: {activity.moodPre} out of 10</div>

                  <div className="activity__moodChange">Your mood quotient changed {((activity.moodPost - activity.moodPre) / 10) * 100}%</div>
                  <div className="activity__note">Notes: "{activity.note}"</div>


                  <button
                    onClick={() => {
                      activityToDelete(activity)
                    }}
                  >Delete</button>

                </section>
              </Card.Body>
            </Accordion.Collapse>
        </Card>
      </Accordion>
    </>

  )
}

