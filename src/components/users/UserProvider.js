import React, { useState, useEffect } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    return fetch("https://runners-hi-db.herokuapp.com/users")
    // return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
}

const addUser = user => {
    // return fetch("http://localhost:8088/users", {
    return fetch("https://runners-hi-db.herokuapp.com/users", {
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