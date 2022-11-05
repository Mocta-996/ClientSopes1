import React from 'react';
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

function TopBar() {
    const navigate = useNavigate();

  
    const items = [
        {
            label: 'Live',
            icon: 'pi pi-play',
            command: ()=>{navigate("/")}
        },
        {
            label: 'Logs',
            icon: 'pi pi-sort-alt',
            command: ()=>{navigate("/logs");}
        }
    ];
   



    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
   
    
 
    return (
        <div>
            <div className="card">
            <Menubar model={items} start={start}   />
            </div>
           
        </div>
    );
}

export default TopBar;