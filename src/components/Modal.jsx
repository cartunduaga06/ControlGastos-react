import Cerrar from '../img/cerrar.svg'
import { useState } from 'react'
import Mensaje from './Mensaje'


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [select, setSelect] = useState('')
    const [mensaje, setMensaje] = useState('')


    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {

            setModal(false)
        }, 500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, select].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)

            return
        }

        guardarGasto({ nombre, cantidad, select })

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

                <legend>Agrega tus gastos aqui</legend>
                {mensaje && <Mensaje tipo="error" >{mensaje} </Mensaje>}

                <div className='campo'>
                    <label htmlFor='mombre'>Nombre Gasto</label>
                    <input

                        type='text'
                        id='nombre'
                        className='u-full-width'
                        placeholder='Añade el nombre de gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />


                </div>
                <div className='campo'>
                    <label htmlFor='mombre'>Cantidad</label>
                    <input

                        type='number'
                        id='cantidad'
                        className='u-full-width'
                        placeholder='Añade la cantidad de gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />


                </div>

                <div className='campo'>
                    <label htmlFor='mombre'>Categoria</label>
                    <select
                        id='categoria'
                        className='u-full-width'
                        value={select}
                        onChange={e => setSelect(e.target.value)}
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

                <input type='submit' value='Agregar Gasto' />
            </form>
        </div>
    )
}

export default Modal