import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: ${props => props.col*10}%;
    margin: auto;
    padding: 20px;
    background-color: lightgray;
    margin-top: 50px;
    text-align: center;
    font-size: 32px;
    font-weight: bold
`


export default function Container(props) {
    return (
        <div>
            <StyledContainer col={props.col}>
                {props.children}
            </StyledContainer>
        </div>
    )
}
