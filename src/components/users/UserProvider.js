import React, { useState, useEffect } from "react"

let deployed = "https://runners-hi-db.herokuapp.com"
let local = "http://localhost:8088"
let site = deployed

export const UserContext = React.createContext()

export const UserProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    return fetch(`${site}/users`)
    // return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
}

const addUser = user => {
    // return fetch("http://localhost:8088/users", {
    return fetch(`${site}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(getUsers)
}

return (
  <UserContext.Provider value={{
      users, addUser, getUsers
  }}>
      {props.children}
  </UserContext.Provider>
)
}