import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import Card from './Card'
import MyButton from './MyButton'

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
            <Card user>
                {myData && (
                <>
                    Inloggad som
                    <p><b>Namn:</b> {myData.firstName} {myData.lastName}</p>
                    <p><b>E-post:</b> {myData.email}</p>
                    <Link to={`/login`}><MyButton>Byt konto</MyButton></Link>
                </>
                )}
            </Card>
        </div>
    )
}
