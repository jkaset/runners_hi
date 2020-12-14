import React, { useContext } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Card, Accordion, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'
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
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <ul>
              <li>{activity.date}</li>
              <li>{activityHeading}</li>
              <li>Mental Improvement: {((activity.moodPost - activity.moodPre) / 10) * 100}%</li>
            </ul>
            <Button
            ><FontAwesomeIcon icon={ faCaretSquareDown }/></Button>
            
            <Button
              onClick={() => {
                activityToDelete(activity)
              }}><FontAwesomeIcon icon={ faTrashAlt }/></Button>
            
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <div className="activity__note">Notes: "{activity.note}"</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>

  )
}


{/* <section className="activity">
                  <div className="activity__date">{activity.date}</div>
                  <div className="activity__name">{activityHeading}</div>
                  <div className="activity__moodPost">Post-activity Mood: {activity.moodPost} out of 10</div>
                  <div className="activity__moodPre">Pre-activity Mood: {activity.moodPre} out of 10</div>

                  <div className="activity__moodChange">Your mood quotient changed {((activity.moodPost - activity.moodPre) / 10) * 100}%</div>
                  <div className="activity__note">Notes: "{activity.note}"</div>


                  

                </section> */}