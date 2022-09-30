import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'



const Header = ({presupuesto, setPresupuesto, isValidate, setIsValidate, gastos }) => {
  return (
    <header>
        <h1> Planificador de gastos</h1>

        {isValidate ? (
            <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />):(<NuevoPresupuesto 
            presupuesto={presupuesto} setPresupuesto={setPresupuesto}
               setIsValidate = {setIsValidate}/>) }
        
    </header>
  )
}

export default Header