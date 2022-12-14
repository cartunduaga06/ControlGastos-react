import Cerrar from '../img/cerrar.svg'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])


    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {

            setModal(false)
        }, 500)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)

            return
        }

        guardarGasto({ nombre, cantidad, categoria, id, fecha })

    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={Cerrar}
                    alt="Cerrar Modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>

                <legend>{gastoEditar.nombre ? 'Editar': 'Agrega tus gastos aqui'}</legend>
                {mensaje && <Mensaje tipo="error" >{mensaje} </Mensaje>}

                <div className='campo'>
                    <label htmlFor='mombre'>Nombre Gasto</label>
                    <input

                        type='text'
                        id='nombre'
                        className='u-full-width'
                        placeholder='A??ade el nombre de gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />


                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input

                        type='number'
                        id='cantidad'
                        className='u-full-width'
                        placeholder='A??ade la cantidad de gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />


                </div>

                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    <select
                        id='categoria'
                        className='u-full-width'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
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

                <input type='submit' value={gastoEditar.nombre ? 'Editar gasto': 'Agregar Gasto'} />
            </form>
        </div>
    )
}

export default Modal