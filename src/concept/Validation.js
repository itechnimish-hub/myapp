import React, { useState } from 'react'

const Validation = () => {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const valid = () => {
        let isValid = true

        if (!user.match("^[a-zA-Z]+$")) {
            setNameError("Invalid Name")
            isValid = false
        } else {
            setNameError("")
        }
        if (!email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")) {
            setEmailError("Invalid Email")
            isValid = false
        } else {
            setEmailError("")
        }
        if (password.length < 6) {
            setPasswordError("Password must be more than 6")
            isValid = false
        } else {
            setPasswordError("")
        }
        return isValid
    }

    const handleSubmit = (e) => {

        if (valid()) {

            console.log(user, email, password)
            alert("Form Successfully Submitted")
        }
    }

    return (
        <div>
            <h1>Validation Form Handling</h1>
            <input type='text' placeholder='Username' value={user} onChange={(e) => { setUser(e.target.value) }} />
            <br />
            <p>{nameError}</p>
            <input type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <br />
            <p>{emailError}</p>
            <input type='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <p>{passwordError}</p>
            <button type='submit' onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Validation;
