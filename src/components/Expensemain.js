import React,{useState} from "react";
import Expense from "./Expense";
import Card from "./Card";
import FilterYear from "../FilterYear";
import ExpenseList from "./ExpenseList";
import './Expensemain.css';

const ExpenseMain=(props)=> {
   
    const [filteredyear,setyear]=useState('2019')
    const fithand=(selectedyear)=>{
        setyear(selectedyear);  
    }
    const FilteredExpenses=props.items.filter(Re=>{
        return Re.date.getFullYear().toString() ===filteredyear;
    });

    return (<div><Card className="expense">
           <FilterYear select={filteredyear} onsave={fithand}></FilterYear>
           <ExpenseList atom={FilteredExpenses}></ExpenseList>
    
    </Card></div>)
}
export default ExpenseMain;