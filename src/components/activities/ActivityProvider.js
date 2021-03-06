import React, { useState, useEffect } from "react"

let deployed = "https://runners-hi-db.herokuapp.com"
let local = "http://localhost:8088"
let site = deployed

export const ActivityContext = React.createContext()

export const ActivityProvider = (props) => {
    const [activities, setActivities] = useState([])
    const [ searchTerms, setTerms ] = useState("")

    const getActivities = () => {
        // return fetch("http://localhost:8088/activities")
        return fetch(`${site}/activities`)
            .then(res => res.json())
            .then(setActivities)
    }

    const addActivity = activity => {
        // return fetch("http://localhost:8088/activities", 
        return fetch(`${site}/activities`,
        {
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

    const useActivities = () => {
        const sortedByDate = activities.sort(
            (currentActivity, nextActivity) =>
            Date.parse(nextActivity.date) - Date.parse(currentActivity.date) 
        )
         return sortedByDate
     };


    const deleteActivity = activityId => {
        return fetch(`${site}/activities/${activityId}`, {
        // return fetch(`http://localhost:8088/activities/${activityId}`, {
            method: "DELETE"
        })
            .then(getActivities)
    }

    const updateActivity = activity => {
        // return fetch(`http://localhost:8088/activities/${activity.id}`, {
        return fetch(`${site}/activities/${activity.id}`, {
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
            activities, addActivity, getActivities, updateActivity, deleteActivity, useActivities, searchTerms, setTerms
        }}>
            {props.children}
        </ActivityContext.Provider>
    )

}
