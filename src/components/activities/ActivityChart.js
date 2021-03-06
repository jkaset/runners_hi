import React, { useContext } from 'react'
import { ActivityContext } from "./ActivityProvider"
import { Line } from 'react-chartjs-2'
import "./Activity.css"



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

  let moodsPost = []

  //push all moodPost numbers into empty array
  activities.forEach(activity => {
    if (activity.userId === user) {
      moodsPost.push(parseInt(activity.moodPost))
    }
    //console.log(moodsPost)
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
  //console.log(instancesArray)




  const state = {
    labels: (instancesArray.reverse()),
    datasets: [
      {
        label: 'Before',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#003EF8',
        borderColor: '#292b2c',
        borderWidth: 2,
        data: (moodsPre)
      },
      {
        label: 'After',
        fill: false,
        lineTension: .5,
        backgroundColor: '#FFE186',
        borderColor: '#FFC107',
        borderWidth: 2,
        data: (moodsPost)
      }
    ]
  }

  return (
    <>
      <div className="chart">
        <Line
          data={state}
          height={100}
          options={{ maintainAspectRatio: true }}
          options={{
            // 

            xAxes: [{
              barPercentage: .5,
              barThickness: 22,
              maxBarThickness: 38,
              minBarLength: 18,

              ticks: {
                beginAtZero: false,
                stepSize: 1,
                max: 10,
                min: 1
              }
            }],

            yAxes: [
              {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                labels: {
                  show: false
                },
                ticks: {
                  suggestedMin: 1,
                  suggestedMax: 10

                }

              },
              {
                type: 'linear',
                display: true,
                position: 'right',
                gridLines: {
                  display: false
                },
                id: 'y-axis-2',
                labels: {
                  show: false
                },
                ticks: {
                  beginAtZero: false,
                  min: 1

                }
              }
            ]
          }
          }
        />
      </div>
    </>
  )

}
