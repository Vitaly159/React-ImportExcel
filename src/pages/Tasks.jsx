import {useState, useEffect} from 'react';
import * as XLSX from 'xlsx';
import Chart from '../components/Chart';

import { StatusTasks } from '../components/StatusTasks/StatusTasks';
import {TasksTable} from '../components/TasksTable/TasksTable';

import './pages.css';
import './tasks.css';

export const Tasks = () => {
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(
    localStorage.excelData ? JSON.parse(localStorage.excelData) : null
  );

  useEffect(() => {
    localStorage.setItem("excelData", JSON.stringify(excelData));
  }, [excelData]);

  // handle File
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){

      if(selectedFile && fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  
  return (
    <div className="container">

      {/* область загрузки файла */}
      <div className='form'>
        <form className='form-group' autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <h1>Tasks</h1>
            <h5>Upload Excel file</h5>
          </div>
          <br></br>
          <input type='file' className='form-control' onChange={handleFile} required />

          {excelFileError && 
            <div className='text-danger' style={{marginTop:5+'px'}}>
              {excelFileError}
            </div>
          }
          <button type='submit' className='btn btn-success' style={{marginTop:5+'px'}}>
            Submit
          </button>

          <label><h5>Upload Excel file</h5></label>
        </form>

        {excelData !== null && <StatusTasks excelData={excelData}/>}
      </div>

      <br/>
      <hr></hr>

      {/* область просмотра файла */}
      <div>
        <h5>View Excel file</h5>
        <div className='viewer'>
          {excelData===null&&<>No file selected</>}
          {excelData!==null&&(
            <div className='table-responsive'>
              <TasksTable excelData={excelData} setExcelData={setExcelData}/>
            </div>
          )}       
        </div>
      </div>
    </div>
  );
}