// import {useContext} from "react"
// import { ActivityContext } from "./ActivityProvider"

//   //Mood math 
//   const user = parseInt(localStorage.getItem("runnersHi_user"))

//   let moodsPre = []
//   const { activities } = useContext(ActivityContext)
  
//   const moodsPreTotal = () => {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     activities.forEach(activity => {
//       if (activity.userId === user) {
//         moodsPre.push(parseInt(activity.moodPre))
//       }
//       console.log(moodsPre)
//     })

//     return moodsPre.reduce(reducer);
//   }

//   let moodsPost = []
//   const moodsPostTotal = () => {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     activities.forEach(activity => {
//       if (activity.userId === user) {
//         moodsPost.push(parseInt(activity.moodPost))
//       }
//       console.log(moodsPost)
//     })

//     return moodsPost.reduce(reducer)
//   }

//   const average = (moodsPostTotal() - moodsPreTotal())/moodsPre.length
  
//   const ActivityMoodMath = () => {
    
//     return average * 10

//   }


