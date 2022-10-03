import React from 'react'
import Gastos from './Gastos'

const ListadoGatos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className='listado-gastos  contenedor'>

        <h2>{gastos.length ? 'Gastos': 'no hay gastos aún'}</h2>
        {gastos.map(gasto => (
            <Gastos key={gasto.id} gasto = {gasto} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto}/>
        ))}


       
    </div>
  )
}

export default ListadoGatos