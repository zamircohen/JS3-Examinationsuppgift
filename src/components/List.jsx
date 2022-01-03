import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Create from '../components/Create'
import Card from './Card'
import Columns from './Columns'
import Container from './Container'
import DeleteButton from './MyButton' 

export default function CustomerList() {

    const [customerList, setCustomerList] = useState(null)

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
        // navigate('/home')
    }


    return (
        <div>

            <Columns col={3} mar={"left"}>       
            <Create onSuccess={fetchData} />
            </Columns>

            <Columns col={3} mar={"auto"}>       
              <h1>YOUR CUSTOMERS</h1>

              {customerList && customerList.map((customer) => {
                return (
                    <>
            
                    <Card>
                     <h2>{customer.name}</h2>
                     <ul>
                         <li>Phone number: {customer.phoneNumber}</li>
                         <li>Email: {customer.email}</li>
                         <li>VAT number: {customer.vatNr}</li>
                         <li><Link to={`/customer/${customer.id}`}>Mer info</Link></li>
                     </ul>
                        <DeleteButton delete onClick={(e) => handleOnDelete(customer.id)}>DELETE CUSTOMER</DeleteButton>
                    </Card>
             
                    </>
                
                )
                    
            })}

            </Columns>

        </div> 

    )
}
