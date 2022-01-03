import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import LoginButton from '../components/MyButton'
import Content from '../components/Content'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const navigate = useNavigate()


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



    return (
        <div>
            
            <Container col={3}>
                <p>myCUSTOMERS</p>
                <Content>
            <h2>LOGIN</h2>

            <form onSubmit={handleOnSubmit}>
                <label>E-mail</label><br />
                <input type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <br />
                <br />
                <label>Password</label><br />
                <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <LoginButton type="submit">Login</LoginButton>
                <br />
            </form>
            
            OR CREATE A NEW USER <a href="../user/create">HERE</a>
            <br />
            </Content>
            </Container>
        </div>
    )
}

