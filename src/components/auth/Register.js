import React, { useRef } from "react"
import "./Login.css"

let deployed = "https://runners-hi-db.herokuapp.com"
let local = "http://localhost:8088"
let site = deployed

export const Register = (props) => {
    const firstName = useRef()
    //const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const conflictDialog = useRef()

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`${site}/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then((userExists) => {
                    if (!userExists) {
                        // If your json-server URL is different, please change it below!
                        fetch(`${site}/users`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email.current.value,
                                password: password.current.value,
                                name: `${firstName.current.value}`
                            })
                        })
                            .then(_ => _.json())
                            .then(createdUser => {
                                if (createdUser.hasOwnProperty("id")) {
                                    // The user id is saved under the key app_user_id in local Storage. Change below if needed!
                                    localStorage.setItem("runnersHi_user", createdUser.id)
                                    props.history.push("/")
                                }
                            })
                    }
                    else {
                        conflictDialog.current.showModal()
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Runner's-Hi</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}

