import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
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
        
            fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then(data => setResponse(data))
    }


    return (
        <div>
         
            <h2>Skapa nytt konto</h2>
         
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={firstName} placeholder="Förnamn" onChange={e => setFirstName(e.target.value)} />
                <input type="text" value={lastName} placeholder="Efternamn" onChange={e => setLastName(e.target.value)} />
                <input type="text" value={email} placeholder="E-post" onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Lösenord" onChange={e => setPassword(e.target.value)} />
                <input type="text" value={organisationKind} placeholder="Organisation" onChange={e => setOrganisationKind(e.target.value)} />
                <br />
                <br />
                <Button login type="submit">Create</Button>
            </form>
         
        </div>
    )
}
