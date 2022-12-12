import { useState } from 'react';
import ExpenseMain from './components/Expensemain';
import NewExpense from './components/NewExpense';
import './App.css';


const Dumyy=[
  {
    id: 'e1',
    title: 'screen guard',
    amount: 94.12,
    date: new Date(2020, 7, 22),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 3, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 13),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    date: new Date(2021, 5, 26),
    amount:300,
  },
  

];
const App=()=> {
  const [exact,setexact]=useState(Dumyy);
  const addexpenses=Expen=>{
       setexact ((prevexp)=>{
    return[Expen,...prevexp];
   });

  };
  
  
      
  return (<div>
    <NewExpense  Addexpensehandler={addexpenses} />
     <ExpenseMain items={exact} />
  </div>
  
  )
};
export default App;
