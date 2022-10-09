import {useState, useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({gastos, presupuesto, setGastos, setPresupuesto, setIsValidate}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)



    useEffect(() => {
        const totalGastado = gastos.reduce((acumulado, gasto)=> gasto.cantidad + acumulado, 0)
        const totalDisponible =  presupuesto - totalGastado
        const porcentajeGastado = ((presupuesto - totalDisponible)/presupuesto) * 100

       
        setDisponible(totalDisponible)
        setGastado(totalGastado)

        setTimeout(() => {
            setPorcentaje(porcentajeGastado)
        }, 1000);
    }, [gastos])

    const formatearCantidad = (cantidad) => {

        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'COP'})
    }

    const handleResetApp = () => {
const resultado =  confirm('¿Estas seguro de reiniciar la app?')

    if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidate(false)
            
            
        }   
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: porcentaje> 100 ? '#DC2626':'#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje> 100 ? '#DC2626':'#3B82F6',
                        textSize: '1.5rem'
                    }
                    )}
                    value={porcentaje}
                    text={`${porcentaje.toFixed(0)}% gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
               <button className='reset-app' type='buttom' 
               onClick={handleResetApp}>
                Resetear APP
               </button>
                <p>
                    <span> Presupuesto </span> $ {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo':''}`}>
                    <span> Disponible </span> $ {formatearCantidad(disponible)}
                </p>
                <p>
                    <span> Gastado </span> $ {formatearCantidad(gastado)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto