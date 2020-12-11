//clean this up for unwanted functions in context

import React, { useState } from "react"

export const ActivityTypeContext = React.createContext()

export const ActivityTypeProvider = (props) => {
  const [activityTypes, setActivityTypes] = useState([])
  const [ searchTerms, setTerms ] = useState("")

  const getActivityTypes = () => {
    return fetch("http://localhost:8088/activityTypes")
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