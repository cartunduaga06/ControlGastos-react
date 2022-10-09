import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar gastos</label>
                
                    <select   
                        value={filtro}
                         onChange={e => setFiltro(e.target.value)}                 
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='alimentacion'>Alimentacion</option>
                        <option value='transporte'>Transporte</option>
                        <option value='hogar'>Hogar</option>
                        <option value='salud'>Salud</option>
                        <option value='ropa'>Ropa</option>
                        <option value='diversion'>Diversion</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='varios'>Gastos Varios</option>


                    </select>
                
            </div>
        </form>
    </div>
  )
}

export default Filtros