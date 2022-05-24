import React, { Component } from 'react';
import Styled from 'styled-components';

const Styledcontainer = Styled.div`
    border: 3px solid red;
    text-align: after;
    display: grid;
    grid-template: 20% 40% 40%/ repeat(3, 1fr);
    grid-template-areas: 
    "titulo titulo titulo"
    "divOne divS   divT"
    "divF   none   none";
`
const Styledh1 = Styled.h1`
    grid-area: titulo;
    color: lightblue;
    margin: 10px 0px 0px 15px;
    letter-spacing: 5px;
`
const Divstyled = Styled.div`
    gri-area: divOne;
`
const Styledh2 = Styled.h2`
    margin: 20px 0px 0px 15px;
    font-size: 20px;
`
const DivContent = Styled.div`
    color: white;
    background: blue;
    overflow: hidden;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: 10px;
    -webkit-animation: progress-bar 2s;
    -moz-animation: progress-bar 2s;}
    margin: 0px 0px 0px 15px;
    width: 75%;
`
const Divstyled1 = Styled.div`
    gri-area: divS;
`
const DivContent1 = Styled.div`
    color: white;
    background: blue;
    overflow: hidden;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: 10px;
    -webkit-animation: progress-bar 2s;
    -moz-animation: progress-bar 2s;}
    margin: 0px 0px 0px 15px;
    width: 60%;
`
const Divstyled3 = Styled.div`
    gri-area: divT;
`
const DivContent3 = Styled.div`
    color: white;
    background: blue;
    overflow: hidden;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: 10px;
    -webkit-animation: progress-bar 2s;
    -moz-animation: progress-bar 2s;}
    margin: 0px 0px 0px 15px;
    width: 80%;
`
const Divstyled4 = Styled.div`
    gri-area: divF;
`
const DivContent4 = Styled.div`
    color: white;
    background: blue;
    overflow: hidden;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: 10px;
    -webkit-animation: progress-bar 2s;
    -moz-animation: progress-bar 2s;}
    margin: 0px 0px 0px 15px;
    width: 30%;
`
export default class Component4 extends Component {
    render(){
        return(
            <Styledcontainer>
                <Styledh1>Habilidades</Styledh1>
                <Divstyled>
                    <Styledh2>HTML</Styledh2>
                    <DivContent>75%</DivContent>
                </Divstyled>
                <Divstyled1>
                    <Styledh2>CSS</Styledh2>
                    <DivContent1>60%</DivContent1>
                </Divstyled1>
                <Divstyled3>
                    <Styledh2>JS</Styledh2>
                    <DivContent3>80%</DivContent3>
                </Divstyled3>
                <Divstyled4>
                    <Styledh2>ReactJS</Styledh2>
                    <DivContent4>30%</DivContent4>
                </Divstyled4>
            </Styledcontainer>
        )
    }
}