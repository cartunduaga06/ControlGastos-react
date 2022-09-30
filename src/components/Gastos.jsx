import React from 'react'
import {
    LeadingActions,
    TrailingActions,
    SwipeAction,
    SwipeableList,
    SwipeableListItem
} from'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatearFecha } from '../helpers/injdex';

import IconoAhorro from '../img//icono_ahorro.svg'
import IconoCasa from '../img//icono_casa.svg'
import IconoComida from '../img//icono_comida.svg'
import IconoGastos from '../img//icono_gastos.svg'
import IconoOcio from '../img//icono_ocio.svg'
import IconoSalud from '../img//icono_salud.svg'
import IconoSuscripciones from '../img//icono_suscripciones.svg'



const diccionarioIconos = {
    'ahorro': IconoAhorro,
    'hogar': IconoCasa,
    'alimentacion': IconoComida,
    'gastos': IconoGastos,
    'ocio': IconoOcio,
    'salud': IconoSalud,
    'suscripciones': IconoSuscripciones
    
}


const Gastos = ({gasto}) => {

 const {categoria, nombre, cantidad, id, fecha} = gasto;

  const leadingActions = () => (
        
        <LeadingActions>
            <SwipeAction
                
                onClick={() => console.log('Leading action 1 clicked')}
            >
                    Editar
           </SwipeAction>
        </LeadingActions>
  );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction

               
                onClick={() => console.log('Trailing action 1 clicked')}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );



  return (
    <SwipeableList>
        <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        >
                  

    <div className='gasto sombra'>
        <div className='contenido-gasto'>
        <img 
               src={diccionarioIconos[categoria]}
                alt={categoria}/>
            <div className='descripcion-gasto'>
               
               
               
                <p className='categoria'>{categoria} </p>
                <p className='nombre-gasto'>{nombre} </p>
                <p className='fecha-gasto'> Agregado el: {''}
                <span>{formatearFecha(fecha)}</span> </p>


            </div>
            
        </div>
        <p className='cantidad-gasto'>${cantidad}</p>
        </div>
        </SwipeableListItem>  
        </SwipeableList>
  )
}

export default Gastos