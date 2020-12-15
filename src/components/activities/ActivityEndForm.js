import React, { useContext, useRef } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Form, Button, Card, Accordion } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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
      moodPost: moodValue.pop(),
      note: note.current.value
    })

      //need change route when button is clicked
      //this is the push that needs to happen once form has been updated
      .then(() => props.history.push('/activities'))
  }

  const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let moodValue = []

  //emoji logic
  const emoji = require("emoji-dictionary")
  const moodEmojiArray = ['weary', 'cry', 'frowning', 'confused', 'neutral_face', 'relieved', 'slightly_smiling_face', 'blush', 'grinning', 'joy']
  
  const emojis = moodEmojiArray.map(selector => (emoji.getUnicode(selector)))

  //react bootstrap form, array method to render moods 1-10
  //button at the bottom runs update function

  // const instantGrat = () => {

  //   window.alert("Great Work!")
  // }


  return (
    <>
      <h2 className="formHeading">Finished?</h2>
      
      <Form className="formEnd">

        <h4 className="formHeadline">Time for your post-run check-in</h4>
        

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Run Notes:</Form.Label>
          <Form.Control className="form_note" maxLength={280} as="textarea" rows={3} ref={note} />
        </Form.Group>

        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>How's your mood now?</Form.Label>

          {/* <Form.Control as="select" ref={moodPost}>
            {moods.map(m => (
              <option key={m}>{m}</option>
            ))}
          </Form.Control> */}
          <div className="text-center">
          <ButtonGroup size="lg" className="btnGroup" ref={moodPost}>
          {moods.map(m => (
            <Button variant="light" onClick={evt => {
              evt.preventDefault()
              console.log("clicked", m)
              moodValue.push(m)
            
          }}className={m} key={m}>{emojis[m-1]}</Button>
          ))}
        </ButtonGroup>
        </div>
        </Form.Group>
        <div className="float-right">
        <button className="btn btn-dark btnLog" type="submit" onClick={evt => {
          evt.preventDefault()
          //instantGrat()
          editNewActivity()
          
        }}><FontAwesomeIcon icon={ faPlus }/> Log it</button>
        </div>
      </Form>
      {/* </Card.Body>
             </Accordion.Collapse>
        </Card>
      </Accordion> */}

    </>
  )

}
