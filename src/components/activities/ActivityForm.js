// import React, { useContext, useRef, useEffect } from "react"
// import "./Activity.css"
// import { ActivityContext } from "./ActivityProvider"
// import { ActivityTypeContext } from "../activityTypes/ActivityTypeProvider"

// export const ActivityForm = (props) => {
//   const { activities, addActivity } = useContext(ActivityContext)
//   const { activityTypes, addActivityType } = useContext(ActivityTypeContext)

//   const date = useRef(null)
//   const activityType = useRef(null)
//   const moodPre = useRef(null)
//   const moodPost = useRef(null)
//   const note = useRef(null)

//   useEffect(() => {
//     getActivities()
//   }, [])
 
//   const logNewActivity = () => {
//     const activityTypeId = parseInt(activityType.current.value)
//     console.log(activityTypeId)
//   }
// }