//clean this up for unwanted functions in context

import React, { useState } from "react"

export const ActivityTypeContext = React.createContext()

export const ActivityTypeProvider = (props) => {
  const [activityTypes, setActivityTypes] = useState([])
  const [ searchTerms, setTerms ] = useState("")

  const getActivityTypes = () => {
    return fetch("https://runners-hi-db.herokuapp.com/activityTypes")
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