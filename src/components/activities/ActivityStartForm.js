import React, { useContext, useRef, useEffect, useState } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"
import { Form, Button, Modal } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { format } from 'date-fns'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faSadCry, faGrin, faSmile, faLaugh, faMeh, faFrownOpen, faFrown, faSadTear, faMehBlank, faLaughSquint, faLaughBeam } from '@fortawesome/free-regular-svg-icons';

//state that holds selected emojis

//props: define parameters to capture object
export const ActivityStartForm = (props) => {
  const { addActivity } = useContext(ActivityContext)
  const { activityTypes, getActivityTypes } = useContext(ActivityTypeContext)


  //references created here to attach to input fields in form
  const activityType = useRef(null)

  useEffect(() => {
    getActivityTypes()
      .then(setMood)
  }, [])

  const [mood, setMood] = useState(0)

  const MoodSelector = () => {

    const moodsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <>
        < ButtonGroup size="lg" >
          {
            moodsArray.map(m => (
              <Button variant="light" onClick={evt => {
                evt.preventDefault()
                setMood(m)
                console.log("clicked", m)
                console.log(mood, "mood")

              }} className={`btn--${m}`} id="emoticon" key={m}> {m}</Button>
              
              


            ))
          }
        </ButtonGroup >
        
      </>
    )
  }
  
  



  //emoji logic
  // const emoji = require("emoji-dictionary")
  // const moodEmojiArray = ['weary', 'cry', 'frowning', 'confused', 'neutral_face', 'relieved', 'slightly_smiling_face', 'blush', 'grinning', 'joy']

  // const emojis = moodEmojiArray.map(selector => (emoji.getUnicode(selector)))

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
    } else {return <FontAwesomeIcon icon={ faMehBlank }/>}

  }

  // const icons = ['<FontAwesomeIcon icon={faSadCry} />', '<FontAwesomeIcon icon={faSadTear} />', '<FontAwesomeIcon icon={faFrown} />', '<FontAwesomeIcon icon={faFrownOpen} />', '<FontAwesomeIcon icon={faMeh} />', '<FontAwesomeIcon icon={faSmile} />', '<FontAwesomeIcon icon={faGrin} />', '<FontAwesomeIcon icon={faLaugh} />', '<FontAwesomeIcon icon={faLaughSquint} />', '<FontAwesomeIcon icon={faLaughBeam} />']
  
  //when hover over button m, put m-1 icon in empty div








  //refactored without refs
  const logNewActivity = () => {

    const activityTypeId = parseInt(activityType.current.value)

    if (activityTypeId === 0 || mood === 0) {
      window.alert("Please select activity and mood")
    } else {
      addActivity({

        userId: parseInt(localStorage.getItem("runnersHi_user")),
        date: format(new Date(), 'Ppp'),
        moodPre: parseInt(mood),
        moodPost: "",
        note: "",
        activityTypeId
      })

        .then((newActivity) => props.history.push(`/activities/edit/${newActivity.id}`))

    }
  }


  return (
    <>

      <div className="activityStartContainer">
      <Form className="form form-start ">
        <h2 className="formHeading">Pre-run Stats</h2>
        <div className="emojiContainer">{ButtonStyler()}</div>
        <Form.Group controlId="form.ControlSelect1">
          <Form.Label className="formLabel">Today's activity</Form.Label>
          <Form.Control className="dropdown" as="select" ref={activityType}>
            <option value="0">choose your run</option>
            {activityTypes.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}

          </Form.Control>
        </Form.Group>


        <Form.Group controlId="form.ControlSelect1">
          <Form.Label>On a scale of 1-10, how do you rate your mood?</Form.Label>
          <div className="text-center">

            <MoodSelector />
          </div>

        </Form.Group>
        
        <div className="float-right">
          <Button className="btn btn-warning startButton" type="submit" onClick={evt => {
            evt.preventDefault()
            logNewActivity()

          }} ><FontAwesomeIcon icon={faPlayCircle} /> Start Run</Button>
          <Link to="/activities" className="btn btn-light">
            <FontAwesomeIcon icon={faChartLine} />  See Stats</Link>
        </div>

        {/* <div className={ButtonStyler()}>{ButtonStyler()}</div> */}

      </Form>
      </div>

    </>
  )

}
