export const Histiry_dt = ({getFilteredList, excelData, setMassive, allSets, histiry_dt, setHistiry_dt}) => {
   
  const SelectorArray = () => {
    return [...new Set(excelData.map(item => item.histiry_dt))];
  };
  
  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.histiry_dt == value) || (value == 'Все')) {
          arr.push(elem);
        }
    
        setMassive(arr);
      }; 

      for (let elem of allSets) {
        if (elem !== setHistiry_dt) {
          elem('Все');
        }
      }
  };

  const getSelected = SelectorArray().map((elem, index) => 
    <option key={index} value={elem}>
      {elem}
    </option>
  );
  return(
    <th>histiry_dt
      <select 
        className="selectors"
        value={histiry_dt} 
        onChange={(e) => {
          getFilteredList(e.target.value, setHistiry_dt); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelected}
      </select>
    </th>
  )
}