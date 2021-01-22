import React, { useContext, useRef, useState, useEffect } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { Form, Button, Card, Accordion } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSadCry, faGrin, faSmile, faLaugh, faGrinTongueSquint, faMeh, faFrownOpen, faFrown, faSadTear, faMehBlank, faLaughSquint, faLaughBeam } from '@fortawesome/free-regular-svg-icons';

export const ActivityEndForm = (props) => {

  //pull in PATCH from Provider
  const { updateActivity } = useContext(ActivityContext)

  //set refs to use in form
  const moodPost = useRef(null)
  const note = useRef(null)

  useEffect(() => {
    setMood()
  }, [])
  const [mood, setMood] = useState(0)

  const MoodSelector = () => {

    const moodsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <>
        < div >
          {
            moodsArray.map(m => (
              <Button variant="light" onClick={evt => {
                evt.preventDefault()
                setMood(m)
                // console.log("clicked", m)
                // console.log(mood, "mood")

              }} className={m} id="emoticon" key={m} >{m}</Button>


            ))
          }
        </div >
      </>
    )
  }
  //function to update form: pulls in id of activity just created in form A (the parameter: the URL that will change based on the object we want to display, the id in the browser, the d+ in ApplicationViews?)
  const editNewActivity = () => {
    if (mood === undefined) {
      window.alert("Select your post run mood")
    } else {
    //pull the id that matches the parameter
    updateActivity({
      id: parseInt(props.match.params.activityId),
      moodPost: parseInt(mood),
      note: note.current.value
    })

      //need change route when button is clicked
      //this is the push that needs to happen once form has been updated
      .then(() => props.history.push('/activities'))
  }}

  // const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // let moodValue = []

  // //emoji logic
  // const emoji = require("emoji-dictionary")
  // const moodEmojiArray = ['weary', 'cry', 'frowning', 'confused', 'neutral_face', 'relieved', 'slightly_smiling_face', 'blush', 'grinning', 'joy']

  // const emojis = moodEmojiArray.map(selector => (emoji.getUnicode(selector)))

  //react bootstrap form, array method to render moods 1-10
  //button at the bottom runs update function

  // const instantGrat = () => {

  //   window.alert("Great Work!")
  // }

  const ButtonStyler = () => {
    if (mood === 10) {
      return <FontAwesomeIcon icon={faLaughSquint} />
    } else if (mood === 9) {
      return <FontAwesomeIcon icon={faLaughBeam} />
    } else if (mood === 8) {
      return <FontAwesomeIcon icon={faLaugh} />
    } else if (mood === 7) {
      return <FontAwesomeIcon icon={faGrin} />
    } else if (mood === 6) {
      return <FontAwesomeIcon icon={faSmile} />
    } else if (mood === 5) {
      return <FontAwesomeIcon icon={faMeh} />
    } else if (mood === 4) {
      return <FontAwesomeIcon icon={faFrownOpen} />
    } else if (mood === 3) {
      return <FontAwesomeIcon icon={faFrown} />
    } else if (mood === 2) {
      return <FontAwesomeIcon icon={faSadTear} />
    } else if (mood === 1) {
      return <FontAwesomeIcon icon={faSadCry} />
    } else { return <FontAwesomeIcon icon={faMehBlank} /> }

  }


  return (
    <>
      
      <h2 className="formHeading">Time for your post-run check-in</h2>
      <div className="activityStartContainer">
        <Form className="formEnd">



          <div className="emojiContainer">{ButtonStyler()}</div>
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
              {/* <ButtonGroup size="lg" className="btnGroup" ref={moodPost}>
              {moods.map(m => (
                <Button variant="light" onClick={evt => {
                  evt.preventDefault()
                  console.log("clicked", m)
                  moodValue.push(m)

                }} className={m} key={m}>{emojis[m - 1]}</Button>
              ))}
            </ButtonGroup> */}
              <MoodSelector />
            </div>
          </Form.Group>

          <div className="float-right">
            <button className="btn btn-dark btnLog" type="submit" onClick={evt => {
              evt.preventDefault()
              //instantGrat()
              editNewActivity()

            }}><FontAwesomeIcon icon={faPlus} /> Log it</button>
          </div>
        </Form>
        {/* </Card.Body>
             </Accordion.Collapse>
        </Card>
      </Accordion> */}
      </div>
      
    </>
  )

}
