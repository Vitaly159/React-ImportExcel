import { useState } from "react";

export const Status = ({getFilteredList, excelData, setMassive, status, setStatus, allSets}) => {
  const [arr, setArr] = useState('Все');
   
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.status))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.status == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let elem of allSets) {
        if (elem !== setStatus) {
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
    <th>status
      <select 
        className="selectors"
        value={status} 
        onChange={(e) => {
          getFilteredList(e.target.value, setStatus); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}