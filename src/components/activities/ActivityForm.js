import React, { useContext, useRef, useEffect } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import { Form } from 'react-bootstrap'


//props: define parameters to capture object
export const ActivityForm = (props) => {
  const { activities, addActivity } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  //references created here to attach to input fields in form
  const activityType = useRef(null)
  const moodPre = useRef(null)
  const moodPost = useRef(null)
  const note = useRef(null)
  const userId = parseInt(localStorage.getItem("runnersHi_user"))

  //on initialization, get types for form
  useEffect(() => {
    getActivityTypes()
  }, [])

  const logNewActivity = () => {

    //in case id is a string
    const activityTypeId = parseInt(activityType.current.value)

    if (activityTypeId === 0) {
      window.alert("Please choose an activity")
    } else {
      addActivity({
        userId: userId,
        date: Date.now(), 
        moodPre: moodPre.current.value,
        moodPost: "",
        note: "",
        activityTypeId
      })
      //using history because I need change route when button is clicked
      //this is the push that needs to happen once form has been edited
      //.then(() => props.history.push("/activities"))
    }
  }
  
  return (
      <>
      <Form>
        <h4>Pre-run Stats</h4>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>Today's activity</Form.Label>
          <Form.Control ref={activityType} as="select">
          <option value="0">choose your run</option>
            {activityTypes.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
            
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="form.ControlSelect1">
            <Form.Label>On a scale of 1-10, how's your mood?</Form.Label>
            <Form.Control ref={moodPre} as="select">
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
          <button className="btn btn-secondary" type="submit" onClick={evt => {
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