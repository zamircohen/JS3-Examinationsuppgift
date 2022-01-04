import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import Button from './MyButton'

export default function Change(props) {

    let params = useParams()

    const [name, setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    // const [customerDetail, setCustomerDetail] = useState({})


    function renderInput(type, value, placeholder, setValue) {
        return (
            <input
                required
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
        )
    }


    function renderVatInput(type, value, pattern, placeholder, setValue) {
        return (
            <input
                required
                type={type}
                value={value}
                pattern={pattern}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
        )
    }


    function handleOnSubmit(e) {
        e.preventDefault()
        const url = `https://frebi.willandskill.eu/api/v1/customers/${params.id}/`
        const token = localStorage.getItem("webb21-exuppgift")
        const payload = {
            name,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website,
            email,
            phoneNumber
        }
        
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => props.onSuccess())
        
        setName("")
        setOrganisationNr("")
        setVatNr("")
        setReference("")
        setPaymentTerm("")
        setWebsite("")
        setEmail("")
        setPhoneNumber("")
    }


    return (
        <div>

            <h1>Ändra kund information</h1>
            
            <form onSubmit={handleOnSubmit}>
                {renderInput("text", name, "Namn", setName)}
                {renderInput("text", organisationNr, "Organisationsnummer", setOrganisationNr)}
                {renderVatInput("text", vatNr, "SE[0-9]{10}", "VAT-nummer", setVatNr)}
                {renderInput("text", reference, "Referens nummer", setReference)}
                {renderInput("text", paymentTerm, "Betalningsvillkor i dagar", setPaymentTerm)}
                {renderInput("url", website, "Webbplats", setWebsite)}
                {renderInput("email", email, "E-post", setEmail)}
                {renderInput("tel", phoneNumber, "Telefonnummer", setPhoneNumber)}
                <Button type="submit">Ändra</Button>
            </form>

        </div>
    )
}

