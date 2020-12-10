import React, { useState, useEffect } from "react"

export const ActivityContext = React.createContext()

export const ActivityProvider = (props) => {
    const [activities, setActivities] = useState([])
    //const [ searchTerms, setTerms ] = useState("")

    const getActivities = () => {
        return fetch("http://localhost:8088/activities")
            .then(res => res.json())
            .then(setActivities)
    }

    const addActivity = activity => {
        return fetch("http://localhost:8088/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activity)
        })
            .then(res => res.json())
            .then((newActivity) => {
                getActivities()
                return newActivity
            })
    }


    // const getActivityById = (id) => {
    //     console.log(id)
    //     return fetch(`http://localhost:8088/activities/${ id }?_expand=location&_expand=customer`)
    //         .then(res => res.json())
    // }

    const deleteActivity = activityId => {
        return fetch(`http://localhost:8088/activities/${activityId}`, {
            method: "DELETE"
        })
            .then(getActivities)
    }

    const updateActivity = activity => {
        return fetch(`http://localhost:8088/activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activity)
        })
            .then(getActivities)
    }

    return (
        <ActivityContext.Provider value={{
            activities, addActivity, getActivities, updateActivity, deleteActivity
        }}>
            {props.children}
        </ActivityContext.Provider>
    )

}
