import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'



const Header = ({presupuesto, setPresupuesto, isValidate, setIsValidate, gastos, setGastos }) => {
  return (
    <header>
        <h1> Planificador de gastos</h1>

        {isValidate ? (
            <ControlPresupuesto 
            presupuesto={presupuesto} 
            gastos={gastos}
            setGastos={setGastos}
            setPresupuesto={setPresupuesto}
            setIsValidate = {setIsValidate}
            
            />):(<NuevoPresupuesto 
            presupuesto={presupuesto} setPresupuesto={setPresupuesto}
               setIsValidate = {setIsValidate} setGastos={setGastos} />) }
        
    </header>
  )
}

export default Header