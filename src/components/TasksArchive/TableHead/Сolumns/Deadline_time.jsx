export const Deadline_time = ({getFilteredList, excelData, setMassive, deadline_time, setDeadline_time, allSets}) => {
   
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.deadline_time))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.deadline_time == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let elem of allSets) {
        if (elem !== setDeadline_time) {
          elem('Все')
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
    <th>deadline_time
      <select 
        className="selectors"
        value={deadline_time} 
        onChange={(e) => {
          getFilteredList(e.target.value, setDeadline_time); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}