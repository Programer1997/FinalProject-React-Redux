import React from 'react';
import { useState,useEffect } from 'react';
import CloseBtn from '../img/cerrar.svg';
import Message from './Message';


const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [message,setMessage]=useState('');

    const [name,setName]= useState('');
    const [quantity,setQuantity]= useState('');
    const [category,setCategory]= useState('');

    const [id,setId]= useState('');
    const [fecha,setFecha] = useState('');



    useEffect(() => {
        if(Object.keys(gastoEditar).length>0){
            setName(gastoEditar.name)
            setQuantity(gastoEditar.quantity)
            setCategory(gastoEditar.category)
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }

    }, []);


    

    const handleModal = ()=>{
        
        setAnimarModal(false);
        setGastoEditar({}); //ultimo codigo agregado para limpiar el estado
        setTimeout(()=>{
            setModal(false);
        },500);
    };

    const handleName = (event)=>{ 
        event.preventDefault();
        setName(event.target.value);
    };
    const handleQuantity = (event)=>{ 
        event.preventDefault();
        setQuantity(Number(event.target.value));
    };
    const handleCategory = (event)=>{ 
        event.preventDefault();
        setCategory(event.target.value);
    };
    const handleSubmit = (event)=> { 
        event.preventDefault();

        if([name,quantity,category].includes('')){
            setMessage('All fields are required');
            setTimeout(()=>{
                setMessage('');
            },1500);
            return;
        }

        guardarGasto({name,quantity,category,id,fecha});
 
    };



  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CloseBtn} alt="Close btn" onClick={handleModal}/>
        </div>
        <form action="" onSubmit={handleSubmit} className={`formulario ${animarModal?'animar':'cerrar'}`}>
            <legend>{gastoEditar.name?"Edit expense":"New Expense"}</legend>
            {message && <Message tipo="error">{message}</Message> }

            <div className='campo'>
                <label htmlFor="name">Expenditure Name</label>
                <input 
                id='name'
                type="text"
                placeholder='Add the name of your expenditure'
                value={name}
                onChange={handleName}
                />
            </div>
            <div className='campo'>
                <label htmlFor="quantity">Quantity</label>
                <input 
                id='quantity'
                type="Number"
                placeholder='Add Quantity : ex.300'
                value={quantity}
                onChange={handleQuantity}
                />
            </div>
            <div className='campo'>
                <label htmlFor="quantity">Category</label>
                <select name="" id="categoria" value={category} onChange={handleCategory}>
                    <option value="">-- Select --</option>
                    <option value="save">Save</option>
                    <option value="food">Food</option>
                    <option value="rent">Rent/House</option>
                    <option value="school">School</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="hanging">Hanging</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.name?'Save changes':'Add'} />
        </form>
    </div>
  )
};

export default Modal