import React from "react"
import { Route } from "react-router-dom"
import { ActivityList } from "./activities/ActivityList"
import { ActivityProvider } from "./activities/ActivityProvider"
import { ActivityTypeProvider } from "./activityTypes/ActivityTypeProvider"
import { ActivityStartForm } from "./activities/ActivityStartForm"
import { ActivityEndForm } from "./activities/ActivityEndForm"
import { UserProvider } from "./users/UserProvider"
import { HomeList } from "./home/HomeList"

//if you need data from a provider, it is one of your module's parents, and you need to next it
export const ApplicationViews = (props) => {
  return (
    <>
      <UserProvider>
        <ActivityProvider>
          <Route exact path="/">
            <HomeList />
          </Route>
        </ActivityProvider>
      </UserProvider>

      <ActivityTypeProvider>
        <ActivityProvider>

          <Route exact path="/activities">
            <ActivityList />
          </Route>

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
