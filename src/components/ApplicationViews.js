import React from "react"
import { Route } from "react-router-dom"
import { ActivityList } from "./activities/ActivityList"
import { ActivityProvider } from "./activities/ActivityProvider"
import { ActivityTypeProvider } from "./activityTypes/ActivityTypeProvider"
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
          <Route exact path="/activities">
            <ActivityList />
          </Route>
        </ActivityProvider>
      </ActivityTypeProvider>

    </>
  )
}
