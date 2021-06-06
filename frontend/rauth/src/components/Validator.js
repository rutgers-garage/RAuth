import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom";

const Validator = ({ netid }) => {

    console.log("reeeeee")
    console.log(netid)

    const [exists, setExists] = useState(false)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/addUser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({netid: netid})
        }).then(res => setExists(res))

        console.log(exists)
    })

    return (exists ? <Redirect to="/dashboard"/> : <Redirect to="/register"/>)
}

export default Validator