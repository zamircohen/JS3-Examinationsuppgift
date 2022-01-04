import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Container from './Container'
import Content from './Content'
import Button from './MyButton'

export default function UserCreate() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")

    const [response, setResponse] = useState(null)

    const navigate = useNavigate()

    function handleOnSubmit(e) { 
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/auth/users/"
        const payload = {
            firstName,
            lastName,
            email,
            password,
            organisationKind
        }
        
        // const token = localStorage.getItem("webb21-exuppgift2")
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then(data => setResponse(data))
        navigate('/user/activate')
    }


    return (
        <div>
         
              <h2>CREATE NEW USER</h2>
         
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={firstName} placeholder="Firstname" onChange={e => setFirstName(e.target.value)} />
                <input type="text" value={lastName} placeholder="Lastname" onChange={e => setLastName(e.target.value)} />
                <input type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <input type="text" value={organisationKind} placeholder="Organisation" onChange={e => setOrganisationKind(e.target.value)} />
                <br />
                <br />
                <Button login type="submit">Create</Button>
            </form>
         
        </div>
    )
}
