import { useState } from "react";
import { TableBody } from "./TableBody/TableBody";
import { TableHead } from "./TableHead/TableHead";

export const TasksTable = ({excelData, setExcelFile, setExcelData}) => {
  const [massive, setMassive] = useState(excelData);
  const [filterOn, setFilterOn] = useState(false);
  
  return(
    <table>
      <TableHead 
        setFilterOn={setFilterOn}
        setMassive={setMassive}
        excelData={excelData}
      />

      <TableBody
        excelData={excelData}
        massive={massive}
        filterOn={filterOn}
        setExcelFile={setExcelFile}
        setExcelData={setExcelData}
      />
    </table>
  )
}