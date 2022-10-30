import React, { useState,useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

function TopBar() {

  
    const items = [
        {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            //command: ()=>{setShowLogin(true)}
        },
        {
            label: 'Register',
            icon: 'pi pi-fw pi-user-plus',
            //command: ()=>{setShowRegister(true)}
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