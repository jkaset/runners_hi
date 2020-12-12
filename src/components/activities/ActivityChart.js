import React, { useContext } from 'react'
import { ActivityContext } from "./ActivityProvider"
import { Line } from 'react-chartjs-2'



export const ActivityChart = () => {

  //define user
  const user = parseInt(localStorage.getItem("runnersHi_user"))
  // const userActivities = activities.filter(a => a.userId === user)

  //pull in user's activities
  const { activities } = useContext(ActivityContext)

  ////filter for activities specific to that user
  const userActivities = (activities.filter(a => a.userId === user))

  //console.log(userActivities)

  let moodsPre = []

  //push all moodPre numbers into empty array
  activities.forEach(activity => {
    if (activity.userId === user) {
      moodsPre.push(parseInt(activity.moodPre))
    }
    //console.log(moodsPre)
  })

  // const instances = userActivities.length
  // console.log(instances)
let instancesArray = []
//const instances = () => {
  for (let i = 0; i < userActivities.length; i++) {
    //console.log((i).toString()).split("")
    instancesArray.push(((i).toString()).split(""))
    //return i
  }
//}
console.log(instancesArray)




  const state = {
    labels: (instancesArray),
    datasets: [
      {
        label: 'Before',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: (moodsPre)
      }
    ]
  }

  const state1 = {
    labels: (instancesArray),
    datasets: [
      {
        label: 'Before',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: (6, 7, 8, 9, 10)
      }
    ]
  }



  return (
    <>
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Mood Relationship',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
</>
  )
}
