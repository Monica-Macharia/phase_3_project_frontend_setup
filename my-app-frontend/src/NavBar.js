import React from 'react';
import {NavLink} from 'react-router-dom';

const styles = {
    display: "inline-block",
    
    width: "60px",
    padding: "35px",
    margin: "17px 16px 16px",
    textDecoration: "none",
    color: "black",
  };
  function NavBar(){
    return (
      
        <div className = "bar">
          <img className= "logo" src="https://images.unsplash.com/photo-1614529303008-4762ea020a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk4fHxzbWFsbCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt= "logo"/> 
          <p className= "name"><b>Sales Tracker</b></p>
      
            <NavLink to = "./" exact = "true"
            style={styles}
            activeclassname={{
                background: "darkblue",
              }}
            > Home 
            </NavLink>
            <NavLink to = "/Tasks" exact ="true"
            style={styles} 
            activeclassname={{
                background: "darkblue",
              }}
           > Tasks
             </NavLink>
             <NavLink 
             to = "/Customers" exact ="true"
            style={styles}
            activeclassname={{
                background: "darkblue",
              }} 
            > Customers 
            </NavLink>
            <NavLink
             to = "/SalesPersons" exact = "true"
            style={styles} 
            
            activeclassname={{
                background: "darkblue",
              }}
            > SalesPersons
            </NavLink>
            <NavLink to = "/Chats" exact ="true"
            style={styles}
            activeclassname={{
                background: "darkblue",
              }} 
            > Chats </NavLink>
        </div>
        
    )
}

export default NavBar;

