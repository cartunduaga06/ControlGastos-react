import React from 'react'
import Gastos from './Gastos'

const ListadoGatos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos  contenedor'>

        
        
         {
            filtro ?  (
              
              <>
              <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay gastos aún' }</h2>
              {gastosFiltrados.map(gasto => (
              <Gastos

                key={gasto.id}  
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              /> 
            )) } </>):
                
            <>
            <h2>{gastos.length ? 'Gastos' : 'No Hay gastos aún' }</h2>
            {gastos.map(gasto => (
                
              <Gastos

                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
            </>
         } 
        
        


       
    </div>
  )
}

export default ListadoGatos