import React, { useEffect, useState} from 'react';
import EmployeeDelete from './EmployeeDelete';
import EmployeeForm from './EmployeeForm';


function Employees(){
    const[employees, setEmployees] = useState([]);
    

useEffect(()=>{
        fetch("http://localhost:9292/employees")
        .then((r) => r.json())
        .then((employees) => setEmployees(employees));
    }, []);

    function handleAddEmployee(newEmployee){
        setEmployees([...employees, newEmployee])
    }

    // function handleDeleteEmployee(deletedEmployee){
    //     const 
    // }



    return (
    <div className="appBody">
        <p className= "sales"><h2>Sales Team</h2></p>
      
        <div className= "salesTeam">
       
        {employees.map((employee) =>      
        <div className= "sellers">
            <p className = "seller1">

            <b><em>Name:</em></b> {employee.name} <br/>
            <b><em>Location:</em></b> {employee.location} <br /> 
            <b><em>Contact:</em></b> {employee.contact} <br />
            <b><em>Comment:</em></b> {employee.comment} <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>)}
        <EmployeeForm onAddEmployee = {handleAddEmployee}/>
          
        
        </div>
        
   
    

    </div>
)
}

export default Employees;