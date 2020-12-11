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

//would this allow me to manually add activity?
const addActivityType = activityType => {
    return fetch("http://localhost:8088/activityTypes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activityType)
    })
        .then(getActivityTypes)
}

const getActivityTypeById = (id) => {
    console.log(id)
    return fetch(`http://localhost:8088/activityTypes/${ id }?_expand=location&_expand=customer`)
        .then(res => res.json())
}

const releaseActivityType = activityTypeId => {
    return fetch(`http://localhost:8088/activityTypes/${ activityTypeId }`, {
        method: "DELETE"
    })
    .then(getActivityTypes)
}

const updateActivityType = activityType => {
    return fetch(`http://localhost:8088/activityTypes/${activityType.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activityType)
    })
        .then(getActivityTypes)
}

return (
    <ActivityTypeContext.Provider value={{
        activityTypes, addActivityType, getActivityTypes, getActivityTypeById, searchTerms, setTerms, releaseActivityType, updateActivityType
    }}>
        {props.children}
    </ActivityTypeContext.Provider>
)


}