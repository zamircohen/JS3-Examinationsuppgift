import React, {useContext, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import Create from '../components/Create'
import CompanyCard from './Card'
import Container from './Container'
import Content from './Content'
import DeleteButton from './MyButton' 

export default function CustomerList() {

    const {customerList, setCustomerList} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("webb21-exuppgift")
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch(url, {
            headers: headers,
        })
        .then(res => res.json())
        .then(data => setCustomerList(data.results))
    }


    function handleOnDelete(id) {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("webb21-exuppgift")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        fetch(url, {
            headers: headers,
            method: "DELETE"
        })
        .then((res) => fetchData())
    }


    return (
        <div>
            <Container col={4}>    
                <Content>
                <Create onSuccess={fetchData} />            
                <br />
                <br />
                <h1>Dina kunder</h1>

                {customerList && customerList.map((customer) => {
                    return (
                        <>
                        <CompanyCard>
                        <h2>{customer.name}</h2>
                        <ul>
                            <li>Tel.nr: {customer.phoneNumber}</li>
                            <li>E-post: {customer.email}</li>
                            <li>VAT-nr: {customer.vatNr}</li>
                            <li><Link to={`/customer/${customer.id}`}>Mer info</Link></li>
                        </ul>
                            <DeleteButton delete onClick={(e) => handleOnDelete(customer.id)}>Radera kund</DeleteButton>
                        </CompanyCard>
                        </>
                    )
                })}
                </Content>
            </Container>  
        </div> 
        )
}
