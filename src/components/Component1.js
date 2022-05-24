import React, { Component } from 'react';
import Styled from 'styled-components';

const Styledcontainer = Styled.div`
    border: 4px solid orange;
    text-align: after;
`
const Styledh1 = Styled.h1`
    color: lightblue;
    margin: 15px;
    letter-spacing: 5px;
`
const Styledh2 = Styled.h2`
    margin: 15px;
`
const Styledp = Styled.p`
    margin: 15px;
`

export default class Component1 extends Component {
    render(){
        return(
            <Styledcontainer>
                <Styledh1>Mis Estudios</Styledh1>
                <Styledh2>Universidad ECCI</Styledh2>
                <Styledp>Estudiante Ingeniera de Sistemas</Styledp>
                <Styledh2>SENA</Styledh2>
                <Styledp>Técnico en nómina y prestaciones sociales</Styledp>
            </Styledcontainer>
        )
    }
}