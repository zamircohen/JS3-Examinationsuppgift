import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Container from '../components/Container'
import LoginButton from '../components/MyButton'
import Content from '../components/Content'


export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const navigate = useNavigate()
    const navigate2 = useNavigate()
    const location = useLocation()

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {email, password}
        fetch(url,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            localStorage.setItem("webb21-exuppgift", token)
            navigate('/home')
        })
    }


    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const uid = params.get("uid")
        const token = params.get("token")
        const url = "https://frebi.willandskill.eu/auth/users/activate/"

        const payload = {uid, token}

        fetch(url,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate2('/login')
        
    },[])


    return (
        <div>
            
            <Container col={3}>
                <p>myCUSTOMERS</p>
                <Content>
                    <h2>Logga in eller skapa ett nytt konto</h2>
                    <br />
                    <form onSubmit={handleOnSubmit}>
                        <label>E-post</label><br />
                        <input type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <br />
                        <br />
                        <label>Lösenord</label><br />
                        <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <br />
                        <br />
                        <LoginButton login type="submit">Logga in</LoginButton>
                        <br />
                    </form>
                    
                    Har du inget konto? Skapa ett nytt <a href="../user/create">här</a>
                    <br />
                </Content>
            </Container>
        </div>
    )
}

