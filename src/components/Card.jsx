import React from 'react'
import styled from 'styled-components'

const CompanyCard = styled.div`
    width: 300px;
    height: 250px;
    border: 3px solid black;
    padding: 10px;
    margin: 10px;
`


export default function Card(props) {
    return (
     
        <CompanyCard>{props.children}</CompanyCard>
     
    )
}
