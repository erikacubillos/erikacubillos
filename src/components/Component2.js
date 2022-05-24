import React, { Component } from 'react';
import { Styledh1, Styledh2, Styledp, Divstyled } from '../../styled/StyleCompone';

export default class Component2 extends Component {
    render(){
        return(
            <Divstyled>
                <Styledh1>Experiencia</Styledh1>
                <Styledh2>Portafolio</Styledh2>
                <Styledp>Páginas web en desarrollo</Styledp>
            </Divstyled>
        )
    }
}