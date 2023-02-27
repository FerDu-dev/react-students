import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TaskForm from './TaskForm';
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import '../styles/Header.css'

export const HeaderNav = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <div className="main-header" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"  style={{height: "70px"}}>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul className="navbar-nav">
                    
                        <li className="nav-item text-white " aria-controls="navbarResponsive">
                        Ferdudev
                        </li>
                    
                    
                        <li className="nav-item active text-white">
                           
                                <faUser/>
                          
                        </li>
                    </ul>
            
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                          <TaskForm/>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>

  
  </div>
  </>
    )
}


    

export default HeaderNav