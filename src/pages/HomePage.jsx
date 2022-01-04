import React, {useContext, useState, useEffect } from 'react'
import bootstrap from 'bootstrap'
import Container from '../components/Container'
import List from "../components/List"
import UserInformation from '../components/UserInformation'


export default function HomePage() {

    // const [myData, setMyData] = useState(null)


    // // const [userFirstName, setUserFirstName] = useContext(UserContext)
    // // const [userLastName, setUserLastName] = useContext(UserContext)
    // // const [userEmail, setUserEmail] = useContext(UserContext)
  

  
    // useEffect(() => {
    //     const url = "https://frebi.willandskill.eu/api/v1/me"
    //     const token = localStorage.getItem("webb21-exuppgift")
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}` 
    //     }
    //     fetch(url, {
    //         headers: headers, 
    //     })
    //     .then(res => res.json())
    //     .then(data => setMyData(data))

    //     // setUserFirstName(myData.firstName)
    //     // setUserLastName(myData.lastName)
    //     // setUserEmail(myData.email)

    // }, [])


            

    return (

     

        <div>
                                 
                    <UserInformation />

          
            <br />

            <div className="col">                            
                <List />
            </div>

        </div>

   
    )
}

