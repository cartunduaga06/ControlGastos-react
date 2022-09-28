import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {

        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'COP'})
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>grafica aqui</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span> Presupuesto </span> $ {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span> Disponible </span> $ {formatearCantidad(0)}
                </p>
                <p>
                    <span> Gastado </span> $ {formatearCantidad(presupuesto)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto