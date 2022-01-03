import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Change from './Change'
import Button from './MyButton'

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
            {customerDetail ? (
                <>
                    <p>Name: {customerDetail.name}</p>
                    <p>Email: {customerDetail.email}</p>
                    <p>Phone Number: {customerDetail.phoneNumber}</p>        
                    <p>Organisation Number: {customerDetail.organisationNr}</p>
                    <p>VAT Number: {customerDetail.vatNr}</p>
                    <p>Reference Number: {customerDetail.reference}</p>
                    <p>Payment Term: {customerDetail.paymentTerm} days</p>
                    <p>Website: {customerDetail.website}</p>
                    <Button onClick={handleOnClick}>BACK</Button>
                    <br />
                    <Change onSuccess={fetchData} />
                </>
            ): "Not Found" }
        </div>
    )
}



