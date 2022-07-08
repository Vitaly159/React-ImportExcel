import './statusTasks.css';

export const StatusTasks = ({excelData}) => {
  
  
  return(
    <div className="statusTasks-wrapper">
      <div className="statusTasks-blocks">
        <h3>Выполнили задачу</h3>
        {excelData.map((task, index) => task.status == 'Да' &&
          <div className="owner-block" key={index}>{task.owner}</div>
        )}
      </div>

      <div className="statusTasks-blocks">
        <h3>В работе</h3>
        <div className="scroll">
          {excelData.map((task, index) => task.status == 'Нет' &&
            <div className="owner-block" key={index}>
              {task.owner}
              
              <p><i>задача: </i>{task.task_name}</p>
              
              <p><i>deadline</i>: {task.deadline_time}</p>
            </div>
            
          )}
          
        </div>
      </div>
    </div>

  )
}