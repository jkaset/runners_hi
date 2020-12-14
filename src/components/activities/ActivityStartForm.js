import React, { useContext, useRef, useEffect } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import { Form, Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { format } from 'date-fns'
import { Logout } from '../auth/Logout'
import { Link } from "react-router-dom"

import { MoodSelector } from "../moods/MoodSelector"

//props: define parameters to capture object
export const ActivityStartForm = (props) => {
  const { addActivity } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)


  //references created here to attach to input fields in form
  const date = format(new Date(), 'MM-dd-yyyy hh:mm')
  const activityType = useRef(null)
  const moodPre = useRef(null)
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
        date: date,
        moodPre: moodValue.pop(),
        moodPost: "",
        note: "",
        activityTypeId
      })

        //using history because I need change route when button is clicked
        //this is the push that needs to happen once form has been edited
        //instead, button on Form A needs to render Form B
        .then((newActivity) => props.history.push(`/activities/edit/${newActivity.id}`))

    }
  }
  const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //create variable to push to
  let moodValue = []
  
  //emoji logic
  const emoji = require("emoji-dictionary")
  const moodEmojiArray = ['weary', 'cry', 'frowning', 'confused', 'neutral_face', 'relieved', 'slightly_smiling_face', 'blush', 'grinning', 'joy']
  
  const emojis = moodEmojiArray.map(selector => (emoji.getUnicode(selector)))

  

  
  
  

  //map function to list activity types from api
  //button on bottom logs the data collected from form to database.json and then routes you to Activity End Form where you update that data
  return (
    <>
      <Logout />

      <Link to="/activities">See stats</Link>
      <Form>
        <h4>Pre-run Stats</h4>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>How's your starting mood?</Form.Label>
        
        <ButtonGroup ref={moodPre}>
          {moods.map(m => (
            <Button onClick={evt => {
              evt.preventDefault()
              console.log("clicked", m)
              moodValue.push(m)     
            }}className={m} key={m}>{emojis[m-1]}</Button>
          ))}
        </ButtonGroup>
        </Form.Group>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>Today's activity</Form.Label>
          <Form.Control as="select" ref={activityType}>
            <option value="0">choose your run</option>
            {activityTypes.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}

          </Form.Control>
        </Form.Group>
        {/* <Form.Group controlId="form.ControlSelect1">
          <Form.Label>On a scale of 1-10, how's your mood?</Form.Label>
          <Form.Control as="select" ref={moodPre}>
            {moods.map(m => (
              <option key={m}>{m}</option>
            ))}
          </Form.Control>
        </Form.Group> */}
        
        


        <button className="btn btn-secondary" type="submit" onClick={evt => {
          evt.preventDefault()
          logNewActivity()

        }}>Ready to Run!</button>
      </Form>

    </>
  )

}