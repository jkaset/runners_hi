import React, { useContext } from "react"
import { ActivityContext } from "./ActivityProvider"

export default function ActivityMoodsMath() {
  
  const { activities } = useContext(ActivityContext)
  //Mood math 
  const user = parseInt(localStorage.getItem("runnersHi_user"))
  const userActivities = activities.filter(a => a.userId === user)
  console.log(userActivities)
  let moodsPre = []
  //let moodsPre = [0];
  

  const moodsPreTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    activities.forEach(activity => {

      if (activity.userId === user) {
        //moodsPre.splice(0, 1)
        moodsPre.push(parseInt(activity.moodPre))
      }
      console.log(moodsPre)
    })

    return moodsPre.reduce(reducer)
    // if (userActivities.length > 0) {
    //   return moodsPre.reduce(reducer)
    //   } else {
    //     return 0
    //   }
  }

  let moodsPost = []
  //let moodsPost = [0];
  
    console.log(moodsPost)
  const moodsPostTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    activities.forEach(activity => {
      if (activity.userId === user) {
        //moodsPre.splice(0, 1)
        moodsPost.push(parseInt(activity.moodPost))
      }
      console.log(moodsPost)
    })
    // if (userActivities.length > 0) {
    // return moodsPost.reduce(reducer)
    // } else {
    //   return 0
    // }
    return moodsPost.reduce(reducer)
  }

  const dividedBy = userActivities.length
  console.log(dividedBy)
  const divisible = (moodsPostTotal() - moodsPreTotal())
  console.log(divisible)
  const average = divisible/dividedBy 


  // if (userActivities.length > 0) {
  // return Math.round(average * 10)
  // } else {
  //   return 0
  // }
  return Math.round(average * 10)
}


