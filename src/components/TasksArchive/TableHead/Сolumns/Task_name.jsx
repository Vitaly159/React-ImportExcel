import { useState } from "react";

export const Task_name = ({getFilteredList, excelData, setMassive, task_name, setTask_name, allSets}) => {
   
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.task_name))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.task_name == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let elem of allSets) {
        if (elem !== setTask_name) {
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
    <th>task_name
      <select 
        className="selectors"
        value={task_name} 
        onChange={(e) => {
          getFilteredList(e.target.value, setTask_name); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}