import './tableBody.css';
import { useState } from 'react';

export const TableBody = ({excelData, massive, filterOn, setExcelData}) => {

  const [selectedItem, setSelectedItem] = useState(false);

  const getActiveNotetice = () => {
    return excelData.find(item => item.id === selectedItem);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = excelData.map(note => {
      if (note.id === selectedItem) {
        return updateNote;
      }
        
      return note;
    });

    setExcelData(updatedNotesArray);
  };

  const onEditField = (field, value) => {
    onUpdateNote({
      ...getActiveNotetice(),
      [field]: value
    })
  }

  return(
    <tbody>
      {(filterOn ? massive : excelData).map((elem, index) => 
        <tr key={index} className={`${elem.status == 'Да' ? "selected" : ""} ${elem.id == selectedItem && "selectedLine"}`} onClick={() => setSelectedItem(elem.id)}>
          <td>{elem.id}</td>
          <td>{elem.task_id} </td>
          <td>{elem.task_name}</td>
          <td>{elem.week_day}</td>
          <td>{elem.deadline_time}</td>
          <td>{elem.owner}</td>
          <td>
            <select value={elem.status} onChange={(e) => onEditField('status', e.target.value)}>
              <option value='Да'>Да</option>
              <option value='Нет'>Нет</option>
            </select>
          </td>
          <td>{elem.status_dt}</td>
          <td>{elem.histiry_dt}</td>
        </tr>
      )}
    </tbody>
  )
}