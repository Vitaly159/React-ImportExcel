import { useState } from "react";

export const Status_dt = ({getFilteredList, excelData, setMassive, status_dt, setStatus_dt, allSets}) => {
   
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.status_dt))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.status_dt == value) || (value == 'Все') || (elem.status_dt == undefined)) { //пофиксить
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let elem of allSets) {
        if (elem !== setStatus_dt) {
          elem('Все');
          console.log(elem);
        }
      }
  };

  const getSelected = SelectorArray().map((elem, index) => 
    <option key={index} value={elem}>
      {elem}
    </option>
  );
  
  return(
    <th>status_dt
      <select 
        className="selectors"
        value={status_dt} 
        onChange={(e) => {
          getFilteredList(e.target.value, setStatus_dt); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}