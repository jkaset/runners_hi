import React, { useContext, useRef } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Form } from 'react-bootstrap'

//didn't need to fetch, set state, just capture id
export const ActivityEndForm = (props) => {
  const { updateActivity } = useContext(ActivityContext)
  const moodPost = useRef(null)
  const note = useRef(null)

  const editNewActivity = () => {

      updateActivity({
        id: parseInt(props.match.params.activityId),
        moodPost: moodPost.current.value,
        note: note.current.value,
      })
    
        //using history because I need change route when button is clicked
        //this is the push that needs to happen once form has been edited
        .then(() => props.history.push('/activities'))
    }
 
    const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
          <Form.Control className="form_note" maxLength={280} as="textarea" rows={3}  ref={note} />
        </Form.Group>
        <button className="btn btn-secondary" type="submit" onClick={evt => {
          evt.preventDefault() 
          editNewActivity()
        }}>Log it</button>
      </Form>
    </>
  )

}
