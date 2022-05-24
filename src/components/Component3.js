import React, { Component } from 'react';
import Styled from 'styled-components';

const Styledcontainer = Styled.div`
    border: 3px solid yellow;
    text-align: after;
    margin: 0px 0px 15px 0px;
`
const Styledh1 = Styled.h1`
    color: lightblue;
    margin: 15px;
    letter-spacing: 5px;
`
const Styledh2 = Styled.h2`
    margin: 15px;
`

export default class Component3 extends Component {
    render(){
        return(
            <Styledcontainer>
                <Styledh1>Certificaciones</Styledh1>
                <Styledh2>Learn To Code</Styledh2>
            </Styledcontainer>
        )
    }
}