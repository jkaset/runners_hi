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

    return moodsPre.reduce(reducer);
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

    return moodsPost.reduce(reducer)
  }

  const dividedBy = userActivities.length
  console.log(dividedBy)
  const divisible = (moodsPostTotal() - moodsPreTotal())
  console.log(divisible)
  const average = divisible/dividedBy 



  return Math.round(average * 10)

}


