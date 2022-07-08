import {useState, useEffect} from 'react';
import * as XLSX from 'xlsx';
import { TasksArchive } from '../components/TasksArchive/TasksArchive';

export const Archive = () => {
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelDatas, setExcelDatas]=useState(
    localStorage.excelDatas ? JSON.parse(localStorage.excelDatas) : null
  );

  useEffect(() => {
    localStorage.setItem("excelDatas", JSON.stringify(excelDatas));
  }, [excelDatas]);
  
  console.log(excelDatas);
  // handle File
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
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
      setExcelDatas(data);
    }
    else{
      setExcelDatas(null);
    }
  }
  
  return (
    <div className="container">

      {/* область загрузки файла */}
      <div className='form'>
        <form className='form-group' autoComplete="off" onSubmit={handleSubmit}>
          <h1>Archive</h1>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form>
      </div>

      <br/>
      <hr></hr>

      {/* область просмотра файла */}
      <div>
        <h5>View Excel file</h5>
        <div className='viewer'>
          {excelDatas===null&&<>No file selected</>}
          {excelDatas!==null&&(
            <div className='table-responsive'>
              <TasksArchive excelData={excelDatas} setExcelFile={setExcelFile} setExcelData={setExcelDatas}/>        
            </div>
          )}       
        </div>
      </div>

    </div>
  );
}