//clean this up for unwanted functions in context

import React, { useState } from "react"

let deployed = "https://runners-hi-db.herokuapp.com"
let local = "http://localhost:8088"
let site = deployed

export const ActivityTypeContext = React.createContext()

export const ActivityTypeProvider = (props) => {
  const [activityTypes, setActivityTypes] = useState([])
  const [ searchTerms, setTerms ] = useState("")

  const getActivityTypes = () => {
    return fetch(`${site}/activityTypes`)
        .then(res => res.json())
        .then(setActivityTypes)
}

return (
    <ActivityTypeContext.Provider value={{
        activityTypes, getActivityTypes
    }}>
        {props.children}
    </ActivityTypeContext.Provider>
)


}