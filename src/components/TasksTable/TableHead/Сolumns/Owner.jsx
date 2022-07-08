import { useState } from "react";

export const Owner = ({getFilteredList, excelData, setMassive,  allSets, owner, setOwner}) => {
     
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.owner))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.owner == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let i = 0; i < allSets.length; i++) {
        if (allSets[i] !== setOwner) {
          allSets[i]('Все');
        }
      }
  };

  const getSelected = SelectorArray().map((elem, index) => 
    <option key={index} value={elem}>
      {elem}
    </option>
  );
  return(
    <th>owner
      <select 
        className="selectors"
        value={owner} 
        onChange={(e) => {
          getFilteredList(e.target.value, setOwner); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}