import React from 'react'
import Container from '../components/Container'
import Content from '../components/Content'
import UserCreate from '../components/UserCreate'

export default function UserCreatePage() {
    return (
        <div>
            <Container col={3}>
            <p>myCUSTOMERS</p>
                <Content>
            <UserCreate />
            </Content>
            </Container>
        </div>
    )
}
