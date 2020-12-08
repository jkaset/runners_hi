import React, { useContext, useRef, useEffect } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
//import { Link } from "react-router-dom"
import { Form } from 'react-bootstrap';
//import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
//import { Activity } from "./Activity"

export const ActivityForm = (props) => {
  const { activities, addActivity } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  const date = useRef(null)
  const activityType = useRef(null)
  const moodPre = useRef(null)
  const moodPost = useRef(null)
  const note = useRef(null)

  useEffect(() => {
    getActivityTypes().then(addActivity)
  }, [])

  const logNewActivity = () => {
    const activityTypeId = parseInt(activityType.current.value)
    console.log(activityTypeId)
  }
  
  return (
      <>
      <Form>
        <h4>Pre-run Stats</h4>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>Choose today's activity</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="form.ControlSelect1">
            <Form.Label>On a scale of 1-10, how's your mood?</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
          <button type="submit" onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          logNewActivity()
        }}>Ready to Run!</button>
        </Form>
      </>
    )

}












// //ORIGINAL CODE JUST TO RENDER FOR ROUTING
// import React, {useContext, useRef, useEffect} from "react"
// import "./Activity.css"
// import {ActivityContext} from "./ActivityProvider"
// import {Link} from "react-router-dom"

// export const ActivityForm = (props) => {
//   const { activities, addActivity } = useContext(ActivityContext)
  
//   useEffect(() => {
//     addActivity()
//   }, [])

//     return (
//       <>
//       <h1>You made it to ACTIVITY FORM</h1>
//       <Link to="/activities" className="btn btn-secondary">Log it!</Link>
//       </>
//     )
// }