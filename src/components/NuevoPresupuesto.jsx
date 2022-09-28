import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidate }) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(presupuesto <= 0 || isNaN(presupuesto)){
            setMensaje('El presupuesto es incorrecto')
         return   
        }

        setMensaje('')
        setIsValidate(true)
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label >Definir presupuesto</label>
                    <input
                        type='Number'
                        className='nuevo-presupuesto'
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />

                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto