import React, {useState, useEffect } from 'react'
import bootstrap from 'bootstrap'
import Container from '../components/Container'
import List from "../components/List"

export default function HomePage() {

    const [myData, setMyData] = useState(null)

    
    useEffect(() => {
        const url = "https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("webb21-exuppgift")
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
        fetch(url, {
            headers: headers, 
        })
        .then(res => res.json())
        .then(data => setMyData(data))

    }, [])


    return (
        <div>
          
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    MY INFORMATION
                        {myData && (
                            <>
                                <p>User: {myData.firstName} {myData.lastName}</p>
                                <p>Email: {myData.email}</p>
                            </>
                        )}

                </div>
            </div>
        </div>
                <br />

            <div className="col">                            
                <List />
            </div>

        </div>
    )
}
