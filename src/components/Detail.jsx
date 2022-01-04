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
                    <h2>CUSTOMER DETAILS</h2>
                    <p><b>Name:</b> {customerDetail.name}</p>
                    <p><b>Email:</b> {customerDetail.email}</p>
                    <p><b>Phone Number:</b> {customerDetail.phoneNumber}</p>        
                    <p><b>Organisation Number:</b> {customerDetail.organisationNr}</p>
                    <p><b>VAT Number:</b> {customerDetail.vatNr}</p>
                    <p><b>Reference Number:</b> {customerDetail.reference}</p>
                    <p><b>Payment Term:</b> {customerDetail.paymentTerm} days</p>
                    <p><b>Website:</b> {customerDetail.website}</p>
                    <Button onClick={handleOnClick}>BACK TO LIST</Button>
                    <br />
                    <Change onSuccess={fetchData} />
                </>
            ): "Not Found" }
            </Content>
            </Container>
        </div>
    )
}



