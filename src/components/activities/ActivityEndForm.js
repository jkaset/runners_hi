import React, { useContext, useRef, useEffect, useState } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Form } from 'react-bootstrap'

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
 
  return (
    <>
      <Form>
        <h4>Done running?</h4>
        <h4>Time for your post-run check-in</h4>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>On a scale of 1-10, how's your mood now?</Form.Label>
          
          <Form.Control as="select" ref={moodPost}  >
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
          <Form.Control as="textarea" rows={3}  ref={note} />
        </Form.Group>
        <button className="btn btn-secondary" type="submit" onClick={evt => {
          evt.preventDefault() 
          editNewActivity()
        }}>Log it</button>
      </Form>
    </>
  )

}
