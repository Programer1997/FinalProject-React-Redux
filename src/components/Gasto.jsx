
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatDate } from '../helpers';

//images : 
import saveIcon from  '../img/icono_ahorro.svg';
import houseIcon from  '../img/icono_casa.svg';
import foodIcon from  '../img/icono_comida.svg';
import spemtIcon from  '../img/icono_gastos.svg';
import hangingIcon from  '../img/icono_ocio.svg';
import healthIcon from  '../img/icono_salud.svg';
import subsIcon from  '../img/icono_suscripciones.svg';

const diccionaryIcons = {
    save : saveIcon,
    food:foodIcon,
    rent:houseIcon,
    school:spemtIcon,
    hanging : hangingIcon,
    health : healthIcon,
    subscriptions : subsIcon

};


const Gasto = ({gasto,setGastoEditar,deleteExpense}) => {
    const {category,name,quantity,id,fecha}=gasto; //DESESTRUCTURANDO EL ARREGLO GASTO PARA PODER USARLO MAS PERRON

    //console.log(gasto );

    const leadingActions = ()=>(
    <LeadingActions>
        <SwipeAction onClick={()=>setGastoEditar(gasto)}>
        Edit
        </SwipeAction>
    </LeadingActions>
    )
    const trailingActions = ()=>(
        <TrailingActions>
            <SwipeAction onClick={()=>deleteExpense(id)} destructive={true}>
            Remove
            </SwipeAction>
        </TrailingActions>
        )
        
    
    
  return (

    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions= {trailingActions()}
        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img 
                        src={diccionaryIcons[category]} 
                        alt={category}
            
                    />
                    <div className='descripcion-gasto'>
                        <p className='categoria'>{category}</p>
                        <p className='nombre-gasto'>{name}</p>
                        <p className='fecha-gasto'> 
                            Added On: {''}
                            <span>{formatDate(fecha)}</span>
                        </p>
                    </div>
                </div>
                <p className='cantidad-gasto'>${quantity}</p>

            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto;