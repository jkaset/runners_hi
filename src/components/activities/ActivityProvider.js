import React, { useState, useEffect } from "react"

export const ActivityContext = React.createContext()

export const ActivityProvider = (props) => {
  const [activitys, setActivitys] = useState([])
  const [ searchTerms, setTerms ] = useState("")

  const getActivitys = () => {
    return fetch("http://localhost:8088/activitys")
        .then(res => res.json())
        .then(setActivitys)
}

const addActivity = activity => {
    return fetch("http://localhost:8088/activitys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
    })
        .then(getActivitys)
}

const getActivityById = (id) => {
    console.log(id)
    return fetch(`http://localhost:8088/activitys/${ id }?_expand=location&_expand=customer`)
        .then(res => res.json())
}

const releaseActivity = activityId => {
    return fetch(`http://localhost:8088/activitys/${ activityId }`, {
        method: "DELETE"
    })
    .then(getActivitys)
}

const updateActivity = activity => {
    return fetch(`http://localhost:8088/activitys/${activity.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
    })
        .then(getActivitys)
}

return (
    <ActivityContext.Provider value={{
        activitys, addActivity, getActivitys, getActivityById, searchTerms, setTerms, releaseActivity, updateActivity
    }}>
        {props.children}
    </ActivityContext.Provider>
)


}