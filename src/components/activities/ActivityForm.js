import React, { useContext, useRef, useEffect, useState } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import { Form } from 'react-bootstrap'
import { format } from 'date-fns'

//props: define parameters to capture object
export const ActivityForm = (props, history) => {
  const { activities, addActivity, updateActivity, getActivities } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  //references created here to attach to input fields in form
  const date = format(new Date(), 'MM-dd-yyyy')
  const activityType = useRef(null)
  const moodPre = useRef(null)
  const moodPost = useRef(null)
  const note = useRef(null)
  const userId = parseInt(localStorage.getItem("runnersHi_user"))

  // Component state
  const [activity, setActivity] = useState({})

  // Is there a a URL parameter??
  const editMode = props.match.params.hasOwnProperty("activityId")

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newActivity = Object.assign({}, activity)
    newActivity[event.target.name] = event.target.value
    setActivity(newActivity)
  }

  /*
      If there is a URL parameter, then the user has chosen to
      edit an activity.
          1. Get the value of the URL parameter.
          2. Use that `id` to find the activity.
          3. Update component state variable.
  */
  // const getActivityInEditMode = () => {
  //   if (editMode) {
  //     const activityId = parseInt(props.match.params.activityId)
  //     const selectedActivity = activities.find(a => a.id === activityId) || {}
  //     setActivity(selectedActivity)
  //   }
  // }


  //on initialization, get types for form
  useEffect(() => {
    getActivityTypes()
    getActivities()
  }, [])

  const logNewActivity = () => {

    //in case id is a string
    const activityTypeId = parseInt(activityType.current.value)

    if (activityTypeId === 0) {
      window.alert("Please choose an activity")
    } else {
      if (editMode) {
        updateActivity({
          userId: userId,
          date: date,
          moodPre: moodPre.current.value,
          moodPost: moodPost.current.value,
          note: note.current.value,
          activityTypeId
        })
          .then(() => props.history.push("/activities"))
      } else {
        addActivity({
          userId: userId,
          date: date,
          moodPre: moodPre.current.value,
          moodPost: "",
          note: "",
          activityTypeId
        })
          .then(() => props.history.push("/activities"))
      }
    }


    //using history because I need change route when button is clicked
    //this is the push that needs to happen once form has been edited
    //.then(() => props.history.push("/activities"))


    //instead, button on Form A needs to render Form B
    //   }
    // }

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
          }}>old button</button>

        <button className="btn btn-secondary" type="submit" onClick={evt => {
          evt.preventDefault()
          logNewActivity()
          props.history.push(`/activities/edit/${activity.id}`)
        }}>Run (get form b)</button>
        </Form>
      </>
    )

  }
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

//part b of form
{/* <Form>
  <Form.Group controlId="form.ControlSelect1">
    <Form.Label>On a scale of 1-10, how's your mood now?</Form.Label>
    <Form.Control ref={moodPost} as="select">
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
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Run Notes:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button className="btn btn-secondary" type="submit" onClick={evt => {
    evt.preventDefault() // Prevent browser from submitting the form
    logNewActivity()
  }}>Log it</button>
</Form> */}