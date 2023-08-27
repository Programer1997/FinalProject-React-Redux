import {useState} from 'react';
import Message from './Message';

const NuevoPresupuesto = ({presupuesto, setPresupuesto,setIsValidPresupuesto}) => {

    const [mensaje,setMensaje]=useState('');

    const handlePresupuesto = (e)=> {
        e.preventDefault();
        if (!presupuesto || presupuesto <0) {
            setMensaje('No es un presupuesto valido');
            return
        } 
        console.log('si es un presupuesto valido ');
        setMensaje('');
        setIsValidPresupuesto(true);
    };

    const handleValuePresupuesto = (event)=>{ 
        event.preventDefault();
        setPresupuesto((Number(event.target.value)));
        //e=>setPresupuesto(Number(e.target.value))
    };


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form action="" className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label htmlFor="" >Define Budget</label>
                <input 
                    type="Number" 
                    className='nuevo-presupuesto' 
                    placeholder='Add your budget' 
                    value={presupuesto} 
                    onChange={handleValuePresupuesto}
                    />
            </div>
            <input type='submit' value="Add" />
            {mensaje && <Message tipo="error">{mensaje}</Message>}  
        </form>
        
    </div>
  )
}

export default NuevoPresupuesto;
//{mensaje && <Message tipo="error">{mensaje}</Message>}  => this line iss SIMILAR to Ternario condition 
//message = false, undefined,null, etc .... dont do nothing
//message = true or someValue .... execute the instruction in this case execute the Component "Message" 