import React, { useContext } from "react"
import { ActivityContext } from "./ActivityProvider"

export default function ActivityMoodsMath() {
  
  //pull in activities from Provider
  const { activities } = useContext(ActivityContext)
 
  //define user as person logged in
  const user = parseInt(localStorage.getItem("runnersHi_user"))
  

  //filter for activities specific to that user
  const userActivities = activities.filter(a => a.userId === user)
  //console.log(userActivities)
  
  //an empty array to push to
  let moodsPre = []

  const moodsPreTotal = () => {
    //The reduce() method executes a reducer function (accumulator) on each element of the array, resulting in single output value.
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    //push all moodPre numbers into empty array
    activities.forEach(activity => {
      if (activity.userId === user) {
        moodsPre.push(parseInt(activity.moodPre))
      }
      //console.log(moodsPre)
    })
    //add all numbers in array together
    return moodsPre.reduce(reducer)
  }

  //do the same for moodsPost
  let moodsPost = []
  
  const moodsPostTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    activities.forEach(activity => {
      if (activity.userId === user) {    
        moodsPost.push(parseInt(activity.moodPost))
      }
      //console.log(moodsPost)
    })
    
    return moodsPost.reduce(reducer)
  }

  //divide by the number of activities in user's array
  const dividedBy = userActivities.length
  //console.log(dividedBy)

  const divisible = (moodsPostTotal() - moodsPreTotal())
  //console.log(divisible)
  
  const average = divisible/dividedBy 
  
  //turn it into percentage
  return Math.round(average * 10)
}


