import { useState } from "react";

export const Week_day = ({getFilteredList, excelData, setMassive, allSets, week_day, setWeek_day}) => {
  const [arr, setArr] = useState('Все');
   
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.week_day))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.week_day == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      };

      for (let elem of allSets) {
        if (elem !== setWeek_day) {
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
    <th>week_day
      <select 
        className="selectors"
        value={week_day} 
        onChange={(e) => {
          getFilteredList(e.target.value, setWeek_day); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}