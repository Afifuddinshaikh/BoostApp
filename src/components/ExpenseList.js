import React from "react";
import Expense from "./Expense";
const ExpenseList=(props)=>{
    if(props.atom.length ===0){
      return(<h2>NO DATA FOUND!!!</h2>)

    }
    return(
        <ul>
            {props.atom.map((expense)=>(<Expense key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    
        </ul>
    )
}
export default ExpenseList;