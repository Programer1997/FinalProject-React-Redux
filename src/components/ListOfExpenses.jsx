import React from 'react';
import Gasto from './Gasto';


const ListOfExpenses = ({gastos,setGastoEditar,deleteExpense}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length?'Expenses':'there is not expenses yet'}</h2>
        {console.log(gastos)}

        {gastos.map(gasto=>(
        <Gasto 
        key={gasto.id}
        gasto={gasto}
        setGastoEditar={setGastoEditar}
        deleteExpense={deleteExpense}
        />
        ))}

    </div>
  )
}

export default ListOfExpenses;