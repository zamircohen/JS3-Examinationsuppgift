import React from 'react'
import styled from 'styled-components'

const CompanyCard = styled.div`
    // width: 300px;
    // height: 300px;
    border: 3px solid black;
    padding: 10px;
    margin: 10px;
    background-color: white;
`

const UserCard = styled(CompanyCard)`
    top: 0;
    position: fixed;
    background-color: lightgray;
    overflow: auto;
    z-index: 100;
`

export default function Card(props) {
    return (
     
        <div>
            <>
                {props.user ? 
                    <UserCard {...props}>{props.children}</UserCard>
                    : <CompanyCard {...props}>{props.children}</CompanyCard>
                }
            </>
        </div>
    )
}
