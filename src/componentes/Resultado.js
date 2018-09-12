import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
class Resultado extends Component {
    mostrarResultado = (  ) => {  
        
        const {marca, año, plan} = this.props.datos
    const resultado = this.props.resultado
    if ( !marca || !año || !plan) return null
    return(
        <div className="gran-total resumen">
        <TransitionGroup component="span" className="resultado">
        <CSSTransition
            classNames="resultado"
             key= {resultado}
             timeout={{enter: 500, exit:500}}>
             <span> $ {resultado} </span>
             </CSSTransition>
        </TransitionGroup>
            {/* <p> $ {resultado} </p>     */}
            </div>
        )
  }
    render(){
        return(
       <div>
           {this.mostrarResultado()}
       </div>
        )
    }
}

export default Resultado