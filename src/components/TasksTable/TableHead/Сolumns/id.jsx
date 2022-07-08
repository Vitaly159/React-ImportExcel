export const Id = ({getFilteredList, excelData, setMassive, setIdArray, idArray, allSets}) => {
   
  const idSelectorArray = () => {
    return [...new Set(excelData.map(item => item.id))];
  };

  const getFilteredArray = (value) => {
    const arr =[];
      for(let elem of excelData){
        if((elem.id == value) || (value == 'Все')) {
          arr.push(elem);
        }

        setMassive(arr);
      }; 

      for (let elem of allSets) {
        if (elem !== setIdArray) {
          elem('Все');
          console.log(elem);
        }
      }
  };

  const getSelectedId = idSelectorArray().map((elem, index) => 
    <option key={index} value={elem}>
      {elem}
    </option>
  );

  return(
    <th>id
      <select 
        className="selectors"
        value={idArray} 
        onChange={(e) => {
          getFilteredList(e.target.value, setIdArray); 
          getFilteredArray(e.target.value)
        }}
      >
        <option>Все</option>
        {getSelectedId}
      </select>
    </th>
  )
}