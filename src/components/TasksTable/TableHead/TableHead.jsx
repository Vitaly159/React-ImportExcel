import { Deadline_time } from "./Сolumns/Deadline_time";
import { Id } from "./Сolumns/id";
import { Owner } from "./Сolumns/Owner";
import { Status } from "./Сolumns/Status";
import { Status_dt } from "./Сolumns/Status_dt";
import { Task_id } from "./Сolumns/Task_id";
import { Task_name } from "./Сolumns/Task_name";
import { Week_day } from "./Сolumns/Week_day";

import { useState } from "react";

export const TableHead = ({setFilterOn, setMassive, excelData}) => {
   
  const [deadline_time, setDeadline_time] = useState('Все');
  const [idArray, setIdArray] = useState('Все');
  const [task_id, setTask_id] = useState('Все');
  const [owner, setOwner] = useState('Все');
  const [status, setStatus] = useState('Все');
  const [status_dt, setStatus_dt] = useState('Все');
  const [task_name, setTask_name] = useState('Все');
  const [week_day, setWeek_day] = useState('Все');

  const allSets = [setIdArray, setDeadline_time, setTask_id, setOwner,
    setStatus, setStatus_dt, setTask_name, setWeek_day
  ];

  const getFilteredList = (targetValue, setValue) => {
    setFilterOn(true);
    setValue(targetValue);
  }
  
  return(
    <thead>
      <tr>
        <Id 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          idArray={idArray}
          setIdArray={setIdArray}
          allSets={allSets}
        />
        <Task_id 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          task_id={task_id}
          setTask_id={setTask_id}
          allSets={allSets}
        />
        <Task_name 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          allSets={allSets}
          task_name={task_name}
          setTask_name={setTask_name}
        />

        <Week_day 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          allSets={allSets}
          setWeek_day={setWeek_day}
          week_day={week_day}
        />

        <Deadline_time 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          deadline_time={deadline_time}
          setDeadline_time={setDeadline_time}
          allSets={allSets}
        />
        
        <Owner 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          owner={owner} 
          setOwner={setOwner}
          allSets={allSets}
        />

        <Status 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          setStatus={setStatus}
          status={status}
          allSets={allSets}
        />

        <Status_dt 
          getFilteredList={getFilteredList} 
          excelData={excelData}
          setMassive={setMassive}
          setStatus_dt={setStatus_dt}
          status_dt={status_dt}
          allSets={allSets}
        />
      </tr>
    </thead>
  )
}