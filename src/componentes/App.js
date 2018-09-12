import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './helper.js'
import Resumen from './Resumen'
import Resultado from './Resultado'

class App extends Component {
    state = {
      resultado : '',
      datos :{}
    }


   cotizarSeguro =(datos) => {
    const {marca,plan,año} = datos
    //aagregar una base 2000
    let resultado = 2000
    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(año)
    //por  cada año se resta el 3%
    resultado -= ((diferencia * 3) * resultado) / 100
    //Americano 15%, Europeo 30%, Asiatico 5% de incremento del valor actual 
    resultado = calcularMarca(marca) * resultado
    //El plan básico incrementa el valor 20% , el plan Completo lo incrementa 50%
    let incrementoPlan  = obtenerPlan(plan) 
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2) 
    console.log( 'El resultado  tomando en cuenta el año, la marca  y el planes de ', resultado );

    //crear objeto para resumen

    const datosAuto ={
      marca : marca,
      año: año,
      plan : plan
    }
    
    this.setState({
      resultado : resultado,
      datos : datosAuto 
    })
  }

  render() {
    return (
     <div className="contenedor">
     <Header
     titulo = 'Cotizador de seguro de auto'
     />
     <div className="contenedor-formulario">
      <Formulario
      cotizarSeguro = {this.cotizarSeguro}
      />
     </div>
        <Resumen
        datos = {this.state.datos}
        />
       <Resultado 
         datos = {this.state.datos}
         resultado= {this.state.resultado}
       />
     </div>
    );
  }
}

export default App;
