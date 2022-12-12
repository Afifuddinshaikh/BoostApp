

import React from 'react';
import './filterY.css';
const FilterYear=(props)=>{
    const dropdown=(event)=>{
    
      props.onsave(event.target.value);
    }
    return(
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>filter by year</label>
                    <select value={props.select}onChange={dropdown}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
            </div>
        </div>
    );
}
export default FilterYear;