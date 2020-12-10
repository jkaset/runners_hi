import React from "react"
import { Route } from "react-router-dom"
import { ActivityList } from "./activities/ActivityList"
import { ActivityProvider } from "./activities/ActivityProvider"
import { ActivityTypeProvider } from "./activityTypes/ActivityTypeProvider"
import { ActivityForm } from "./activities/ActivityForm"
import { ActivityEdit } from "./activities/ActivityEdit"
import { UserProvider } from "./users/UserProvider"

import { HomeList } from "./home/HomeList"

export const ApplicationViews = (props) => {
  return (
    <>
    <UserProvider>
      <ActivityProvider>
        <Route exact path="/" render={
          props => <HomeList {...props} />
        } />
      </ActivityProvider>
    </UserProvider>
        
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

          <Route exact path="/:activities/edit/(\d+)" render={
            props => <ActivityEdit {...props} />
          } />

          {/* <Route exact path="/activities/edit/:activityId(\d+)" render={
            props => <ActivityEdit {...props} />
          } />  */}

        </ActivityProvider>
      </ActivityTypeProvider>

    </>
  )
}
