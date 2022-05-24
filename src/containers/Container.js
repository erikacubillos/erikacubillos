import React, { Component } from 'react'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Styled from 'styled-components';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';

const DivStyled = Styled.div`
    display: grid;
    grid-template: repeat(4, 1fr) / 30% 70%;
    grid-template-areas: 
    "a b"
    "a c"
    "a d"
    "a e";
    margin: 4px;
`
const DivFoto = Styled.div`
    grid-area: a;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const ImgFoto = Styled.img`
    background-image: url('https://scontent.fpei3-1.fna.fbcdn.net/v/t39.30808-6/220131423_10222023118659973_1083594409759247920_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QqeiXtOtY8oAX9VUENN&_nc_ht=scontent.fpei3-1.fna&oh=00_AT_rBpmxSIrv_g3Aq28rRPO0tNMOYuVwe0oER4Wu4cu5_w&oe=6291CCCA');
    border-radius: 50%;
    background-size: 500px;
    height: 300px;
    width: 300px;
    box-shadow: 10px 5px 5px grey;
    border: 2px solid blue;
`
const Nombre = Styled.h2`
    font-size: 32px;
    color: lightblue;
`
const Ocupacion = Styled.h3`
    font-size: 30px;
    color: lightblue;
`
const Parrafo = Styled.p`
    font-size: 25px;
`
export default class Container extends Component {
    render(){
        return(
            //dentro del contenedor padre se importan los componentes 1 y 2
            <DivStyled>
                <DivFoto>
                    <ImgFoto></ImgFoto>
                    <Nombre>ERIKA JOHANA CUBILLOS</Nombre>
                    <Ocupacion>Desarrollador FrondEnd</Ocupacion>
                    <Parrafo>Desarrollando páginas de calidad</Parrafo>
                    <Parrafo>Bogotá, Colombia</Parrafo> 
                </DivFoto>
                <Component1/>
                <Component2/>
                <Component3/>
                <Component4/>
            </DivStyled>
        )
    }
}