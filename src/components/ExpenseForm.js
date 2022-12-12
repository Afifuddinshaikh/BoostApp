import React,{useState} from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [enteredTitle,SetTitle]=useState('');
    const [enteredAmount,SetAmount]=useState('');
    const[enteredDate,SetDate]=useState('');
    const Titlechange=(event)=>{
        SetTitle(event.target.value);
    };
    const Amountchange=(event)=>{
            SetAmount(event.target.value);
    };
    const datechnage=(event)=>{
        SetDate(event.target.value);
    };
    const submithand=(event)=>{
           event.preventDefault();
        const Data={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onsaveData(Data);
      SetAmount('');
      SetDate('');
      SetTitle('');
    };
   return ( <form onSubmit={submithand}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={Titlechange} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number"value={enteredAmount}  onChange={Amountchange}/>
        </div>
        <div className="new-expense__control">
            <label>date</label>
            <input type="date" value={enteredDate} onChange={datechnage} />
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
    </div>
   </form>
    
   )
}
export default ExpenseForm;