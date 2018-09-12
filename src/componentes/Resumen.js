import React, {Component} from 'react'
import {primeraMayuscula} from './helper'

class Resumen extends Component {
    mostrarResumen = (  ) => {
        const {marca, año, plan} = this.props.datos

        if ( !marca || !año || !plan) return null

        return(
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Marca :{primeraMayuscula (marca)} </li>
                <li>Año: {año} </li>
                <li>Plan : {primeraMayuscula (plan)} </li>
            </div>
        )
    }
    render(){
        return (
            <div>
                {this.mostrarResumen()}
            </div>
        
        )
    }
}

export default Resumen