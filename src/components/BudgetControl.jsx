import { useEffect,useState } from 'react';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({presupuesto,gastos}) => {

    const [available,setAvailable]=useState(presupuesto);
    const [spent,setSpent]=useState(0);
    const [porcent,setPorcent]= useState(0);

    useEffect(() => {

        const totalSpent = gastos.reduce((total,gasto)=>{
            //total al inicio es 0, por que asi lo puse yo
            return total + gasto.quantity 
        },0);

        const totalAvailable = presupuesto-totalSpent;
        console.log(totalAvailable);

        const newPorcent = (((presupuesto-totalAvailable)/presupuesto)*100).toFixed(2);

        setAvailable(totalAvailable);
        setSpent(totalSpent);
        setTimeout(()=>{
            setPorcent(newPorcent);
        },900);
    }, [gastos]);

    //calulate porcent spent
    /*const totalSpentGraph = (spent,budget)=> {
        let resultSpent = ((spent*100)/budget).toFixed(2);
        return resultSpent;
    };*/
    
    const formatAmount = (quantity)=> {
        return  quantity.toLocaleString('en-US',{style:'currency',currency : 'USD'})
    };
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                value={porcent}
                styles={buildStyles({
                    pathColor: '#3B82F6',
                    trailColor: '#F5F5F5',
                })}
                text={`${porcent}% Spent`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Budget : </span> {formatAmount(presupuesto)}
            </p>
            <p>
                <span>Available : </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent : </span> {formatAmount(spent)}
            </p>

        </div>
    </div>
  )
}

export default BudgetControl;