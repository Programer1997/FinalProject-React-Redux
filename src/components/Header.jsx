


import NuevoPresupuesto from './NuevoPresupuesto';
import BudgetControl from './BudgetControl';


const Header = ({presupuesto, setPresupuesto,isValidPresupuesto,setIsValidPresupuesto, gastos}) => {

  return (
    <header>
        <h1>Expense Planner</h1>
        {isValidPresupuesto?(
        <BudgetControl presupuesto={presupuesto} gastos={gastos}/>
        ):(
        <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
        )}
    </header>
    
  )
};

export default Header;