import React, { useContext, useRef, useEffect } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import { Form } from 'react-bootstrap'

export const ActivityEdit = (props) => {
  const { activities, addActivity, getActivities, setActivity,editActivity } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)

  //references created here to attach to input fields in form

  const moodPost = useRef(null)
  const note = useRef(null)

  // Is there a a URL parameter??
  const editMode = props.match.params.hasOwnProperty("activityId")

  /*
         If there is a URL parameter, then the user has chosen to
         edit an activity.
             1. Get the value of the URL parameter.
             2. Use that `id` to find the activity.
             3. Update component state variable.
     */
  const getActivityInEditMode = () => {
    if (editMode) {
      const activityId = parseInt(props.match.params.activityId)
      const selectedActivity = activities.find(a => a.id === activityId) || {}
      setActivity(selectedActivity)
    }
  }
  //on initialization, get types for form
  useEffect(() => {
    getActivityTypes().then(getActivities)
  }, [])

  // Once provider state is updated, determine the activity (if edit)
  useEffect(() => {
    getActivityInEditMode()
  }, [activities])

  const editNewActivity = () => {

    editActivity({

      moodPost: moodPost.current.value,
      note: note.current.value,

    })

      //using history because I need change route when button is clicked
      //this is the push that needs to happen once form has been edited
      .then(() => props.history.push('/activities'))

  }


  //form B updateRun
  return (
    <>
      <Form>
        <h4>Done running?</h4>
        <h4>Time for your post-run check-in</h4>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>On a scale of 1-10, how's your mood now?</Form.Label>
          <Form.Control as="select" ref={moodPost} >
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
          <Form.Control as="textarea" rows={3} ref={note} />
        </Form.Group>
        <button className="btn btn-secondary" type="submit" onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          editNewActivity()
        }}>Log it</button>
      </Form>
    </>
  )

}
