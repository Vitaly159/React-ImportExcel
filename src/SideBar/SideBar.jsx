import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

export const SideBar = () => {
  
  const [selectedLi, setSelectedLi]=useState(
    localStorage.selectedLi ? JSON.parse(localStorage.selectedLi) : 1
  );

  useEffect(() => {
    localStorage.setItem("selectedLi", JSON.stringify(selectedLi));
  }, [selectedLi]);
    
  return(
    <div className="side-bar-wrapper">
      <ul className="q">
        <Link className="link-page" to="/">
          <li onClick={() => setSelectedLi(1)} 
              className={`li-tasks ${selectedLi == 1 && "active"}`}
          >
            Задачи
          </li>
        </Link>

        <Link className="link-page" to="/a">
          <li onClick={() => setSelectedLi(2)}  
              className={`li-archive ${selectedLi == 2 && "active"}`}
          >
            Архив
          </li>
        </Link>
      </ul>
    </div>
  )
}