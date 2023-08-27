import { useState,useEffect } from "react";
import Header from "./components/Header";
import IconNewSpent from './img/nuevo-gasto.svg';
import Modal from "./components/Modal";
import ListOfExpenses from "./components/ListOfExpenses";
import {generateId} from './helpers';


function App() {

  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0
  ); //here could use Redux toget in information from store to the others components
  const [isValidPresupuesto,setIsValidPresupuesto]=useState(false);
  //console.log(isValidPresupuesto);
  const [modal,setModal]=useState(false);
  const [animarModal,setAnimarModal]= useState(false);

  const [gastos,setGastos]=useState([]);

  const [gastoEditar, setGastoEditar]= useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length>0){
      console.log("el componente tiene algo");
      setModal(true);
      setTimeout(()=>{
        setAnimarModal(true);
        //console.log(animarModal + ' animar Modal result');
      },500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto',presupuesto ?? 0)
    
  }, [presupuesto])
  
  

  const handleNewSpent = ()=>{
    //console.log('dise lcick par aandir un nuevo gasto ');
    setModal(true);
    setGastoEditar({});

    setTimeout(()=>{
      setAnimarModal(true);
      //console.log(animarModal + ' animar Modal result');
    },500);
  };

  const guardarGasto = (gasto) =>{

    if(gasto.id){
       //console.log(gasto);
       const updateExpenses = gastos.map(gastoState=> gastoState.id===gasto.id?gasto:gastoState);
       setGastos(updateExpenses);
       setGastoEditar({});

    } else {
      gasto.id = generateId();
    gasto.fecha=Date.now();
    setGastos([...gastos,gasto]);

    }
   
    setAnimarModal(false);
    setTimeout(()=>{
      setModal(false);
    },500);

  };

  const deleteExpense = (id)=>{
    //console.log('eliminando',id);
    const updateExpenses = gastos.filter(element=> element.id !== id);
    //console.log(updateExpenses);
    setGastos(updateExpenses);

  };



  return (
    <>
    <div className={modal?'fijar':''}>
      <Header 
      gastos={gastos}
      presupuesto={presupuesto} 
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto?( 
        <>
        <main>
          <ListOfExpenses
            gastos={gastos}
            setGastoEditar= {setGastoEditar}
            deleteExpense={deleteExpense}
          />

        </main>
        <div className="nuevo-gasto">
          <img 
          src={IconNewSpent} 
          alt="IconNewSpent" 
          onClick={handleNewSpent}
          />
        </div>
        </>
        ):null}

        {modal && <Modal 
                    modal={modal}
                    setModal={setModal} 
                    animarModal={animarModal} 
                    setAnimarModal={setAnimarModal} 
                    guardarGasto={guardarGasto} 
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                  />}
     
    </div>

    </>
  )
}

export default App;
