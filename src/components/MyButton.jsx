import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
	box-shadow: 5px 4px 14px -1px #276873;
    ${props => props.delete ? css `background-color: #d0451b;` : `background-color: #408c99;`}
	// background-color:#599bb3;
	border-radius:28px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding:8px 25px;
    border: 0px;
    margin: 5px;
	text-shadow:1px 2px 2px #3d768a;

    :hover {
	background-color:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	${props => props.delete ? css `background-color: #fa795d;` : `background-color: #28eaeb;`}
    }
    
    :active {
	position:relative;
	top:1px;
    }
`

const LoginButton = styled(Button)`
    border-radius: 2px;
    width: 60%;
    display: block
    background-color:
`

export default function MyButton(props) {
    return (
        <div>
            <>
            {props.login ? 
                <LoginButton {...props}>{props.children}</LoginButton>
                : <Button {...props}>{props.children}</Button>
            }
            </>
        </div>
    )
}
