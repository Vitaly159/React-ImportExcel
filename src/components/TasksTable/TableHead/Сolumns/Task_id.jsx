export const Task_id = ({getFilteredList, excelData, setMassive, task_id, setTask_id, allSets}) => {
  
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.task_id))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.task_id == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let i = 0; i < allSets.length; i++) {
        if (allSets[i] !== setTask_id) {
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
    <th>task_id
      <select 
        className="selectors"
        value={task_id} 
        onChange={(e) => {
          getFilteredList(e.target.value, setTask_id); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}