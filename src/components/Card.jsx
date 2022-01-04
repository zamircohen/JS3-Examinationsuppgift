import React from 'react'
import styled from 'styled-components'

const CompanyCard = styled.div`
    // width: 300px;
    // height: 250px;
    border: 3px solid black;
    padding: 10px;
    margin: 10px;
    background-color: white;
`

const UserCard = styled(CompanyCard)`
    top: 0;
    position: relative;
    background-color: lightgray;
    z-index: 100;
    position: -webkit-sticky;

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



        // <CompanyCard>{props.children}</CompanyCard>
     
    )
}
