import React, { useContext, useRef } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Form } from 'react-bootstrap'

// setState schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
//but I didn't need to set state in this particular update, just capture id and PATCH info to replace empty strings
export const ActivityEndForm = (props) => {

  //pull in PATCH from Provider
  const { updateActivity } = useContext(ActivityContext)

  //set refs to use in form
  const moodPost = useRef(null)
  const note = useRef(null)

  //function to update form: pulls in id of activity just created in form A (the parameter: the URL that will change based on the object we want to display, the id in the browser, the d+ in ApplicationViews?)
  const editNewActivity = () => {

    //pull the id that matches the parameter
    updateActivity({
      id: parseInt(props.match.params.activityId),
      moodPost: moodPost.current.value,
      note: note.current.value,
    })

      //need change route when button is clicked
      //this is the push that needs to happen once form has been updated
      .then(() => props.history.push('/activities'))
  }

  const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  //react bootstrap form, array method to render moods 1-10
  //button at the bottom runs update function
  return (
    <>
      <Form>
        <h4>Done running?</h4>
        <h4>Time for your post-run check-in</h4>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>On a scale of 1-10, how's your mood now?</Form.Label>

          <Form.Control as="select" ref={moodPost}>
            {moods.map(m => (
              <option key={m}>{m}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Run Notes:</Form.Label>
          <Form.Control className="form_note" maxLength={280} as="textarea" rows={3} ref={note} />
        </Form.Group>


        <button className="btn btn-secondary" type="submit" onClick={evt => {
          evt.preventDefault()
          editNewActivity()
        }}>Log it</button>
      </Form>
    </>
  )

}
