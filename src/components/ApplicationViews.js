import React from "react"
import { Route } from "react-router-dom"
import { ActivityList } from "./activities/ActivityList"
import { ActivityProvider } from "./activities/ActivityProvider"
import { ActivityTypeProvider } from "./activityTypes/ActivityTypeProvider"
import { ActivityStartForm } from "./activities/ActivityStartForm"
import { ActivityEndForm } from "./activities/ActivityEndForm"
//import { ActivityMoodMath } from "./activities/ActivityMoodMath"

import { UserProvider } from "./users/UserProvider"

import { HomeList } from "./home/HomeList"

export const ApplicationViews = (props) => {
  return (
    <>
      <UserProvider>
        <ActivityProvider>
          <Route exact path="/" render={
            props => <HomeList />
          } />
        </ActivityProvider>
      </UserProvider>

      <ActivityTypeProvider>
       
          <ActivityProvider>

            <Route exact path="/activities" render={
              props => <ActivityList {...props} />
            } />
            <Route exact path="/activities/create" render={
              props => <ActivityStartForm {...props} />
            } />

            <Route exact path="/activities/edit/:activityId(\d+)" render={
              props => <ActivityEndForm {...props} />
            } />

          </ActivityProvider>
       
      </ActivityTypeProvider>

    </>
  )
}
