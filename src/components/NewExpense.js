import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=> {
    const SaveexpenseData=(enterData)=>{
        const Data={
          ...enterData,
          id:Math.random().toString()
        };
        props.Addexpensehandler(Data);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onsaveData={SaveexpenseData} />

        </div>
    )
}
export default NewExpense;