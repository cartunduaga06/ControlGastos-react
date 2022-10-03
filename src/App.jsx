import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { generarId } from './helpers/injdex'
import ListadoGatos from './components/ListadoGatos'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidate, setIsValidate] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar  , setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
      
    }
  }, [gastoEditar])
 
  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)

  }


  const guardarGasto = gasto => {

    if(gasto.id){
      //actualuzar
      const gastosActualizados = gastos.map(gastoActual => gastoActual.id === gasto.id ? gasto : gastoActual)
        
      setGastos(gastosActualizados)
    } else {
      gasto.id = generarId()
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }  
    

    setAnimarModal(false)

    setTimeout(() => {

        setModal(false)
    }, 500)
  }


  const eliminarGasto = id => {
    const gastosFiltrados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosFiltrados)
  }

  return (
    <div className={modal ? 'fijar': ''}>
      <Header
        gastos = {gastos}
        presupuesto={presupuesto} setPresupuesto={setPresupuesto}
        isValidate={isValidate} setIsValidate={setIsValidate}
      />


    

      {isValidate && (
        <>
        <main>

          <ListadoGatos gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          ></ListadoGatos>

        </main>

      <div className='nuevo-gasto'>
        
        <img 
          src={IconoNuevoGasto} 
          alt='Nuevo Gasto' 
          onClick={handleNuevoGasto}
          />
        </div>

        </>
         )}


        {modal && <Modal setModal={setModal} 
         animarModal={animarModal}
         setAnimarModal={setAnimarModal}
         guardarGasto={guardarGasto}
         gastoEditar={gastoEditar}/>}

    </div>
  )
}

export default App
