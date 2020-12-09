import React from "react"
import { Route } from "react-router-dom"
import { ActivityList } from "./activities/ActivityList"
import { ActivityProvider } from "./activities/ActivityProvider"
import { ActivityTypeProvider } from "./activityTypes/ActivityTypeProvider"
import { ActivityForm } from "./activities/ActivityForm"
import { HomeList } from "./home/HomeList"

export const ApplicationViews = (props) => {
  return (
    <>

      <ActivityProvider>
        <Route exact path="/" render={
          props => <HomeList {...props} />
        } />
      </ActivityProvider>

      <ActivityTypeProvider>
        <ActivityProvider>
          {/* <Route exact path="/activities">
            <ActivityList />
          </Route> */}
          <Route exact path="/activities" render={
            props => <ActivityList {...props} />
          } />
          <Route exact path="/activities/create" render={
            props => <ActivityForm {...props} />
          } />

         
          <Route exact path="/activities/edit/:activityId(\d+)" render={
            props => <ActivityForm {...props} />
          } />
        </ActivityProvider>
      </ActivityTypeProvider>

    </>
  )
}
