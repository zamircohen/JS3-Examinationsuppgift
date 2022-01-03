import React from 'react'
import styled from 'styled-components'

const StyledColumns = styled.div`
    width: ${props => props.col*10}%;
    margin: ${props => props.mar};
    padding: 20px;
    background-color: white;
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: bold
`



export default function Columns(props) {
    return (
        <div>
            
            <StyledColumns col={props.col} mar={props.mar}>
                {props.children}
            </StyledColumns>

        </div>
    )
}
