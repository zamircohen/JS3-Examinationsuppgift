import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Change from './Change'
import Container from './Container'
import Content from './Content'
import Button from './MyButton'
import UserInformation from './UserInformation'

export default function Detail() {

  
    let params = useParams()

    const [customerDetail, setCustomerDetail] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        fetchData()
    }, [])


    function fetchData() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${params.id}/`
        const token = localStorage.getItem("webb21-exuppgift")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        fetch(url, {
            method: "GET",
            headers: headers,
        })
        .then(res => res.json())
        .then(data => setCustomerDetail(data))
    }


    function handleOnClick() {
        navigate('/home')
    }



    return (
        <div>

            <UserInformation />

            <Container col={3}>
            <Content>
            {customerDetail ? (
                <>
                    <br />
                    <h2>KUND DETALJER</h2>
                    <br />
                    <p><b>Namn:</b> {customerDetail.name}</p>
                    <p><b>E-post:</b> {customerDetail.email}</p>
                    <p><b>Telefonnummer:</b> {customerDetail.phoneNumber}</p>        
                    <p><b>Organisationsnummer:</b> {customerDetail.organisationNr}</p>
                    <p><b>VAT-nummer:</b> {customerDetail.vatNr}</p>
                    <p><b>Referensnummer:</b> {customerDetail.reference}</p>
                    <p><b>Betalningsvillkor:</b> {customerDetail.paymentTerm} dagar</p>
                    <p><b>Webplats:</b> {customerDetail.website}</p>
                    <Button onClick={handleOnClick}>Tillbaka till listan</Button>
                    <br />
                    <Change onSuccess={fetchData} />
                </>
            ): "Not Found" }
            </Content>
            </Container>
        </div>
    )
}



