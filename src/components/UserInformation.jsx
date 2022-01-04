import React, {useContext, useEffect} from 'react'
import { UserContext } from '../App'

export default function UserInformation() {

   
    const {myData, setMyData} = useContext(UserContext)

  
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
            {myData && (
            <>
                LOGGED AS
               <p><b>Name:</b> {myData.firstName} {myData.lastName}</p>
               <p><b>Email:</b> {myData.email}</p>
            </>
            )}
        </div>
    )
}
