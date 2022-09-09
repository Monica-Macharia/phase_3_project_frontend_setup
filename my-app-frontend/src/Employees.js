import React, { useEffect, useState} from 'react';


function Employees(){
    const[employees, setEmployees] = useState([]);
    // const [name, setName] = useState("");
    // const [location, setLocation] = useState("");
    // const [contact, setContact] = useState("");
    // const [comment, setComment] = useState("");


useEffect(()=>{
        fetch("http://localhost:9292/employees")
        .then((r) => r.json())
        .then((employees) => setEmployees(employees));
    }, []);

// function handleSubmit(e){
//         e.preventDefault();
//     const newItem ={
//         name: name,
//         location: setLocation,
//         contact: setContact,
//         comment: setComment,
       
//     };
//     fetch("",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
            
//         },
//         body: JSON.stringify(newItem),
//     })
//     .then((r)=> r.json())
//     .then((newData) => onAddItem(newData));

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
          
        <div className= "sellers">
            <p className = "seller2">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "sellers">
            <p className = "seller3">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "sellers">
            <p className = "seller4">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "sellers">
            <p className = "seller5">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "sellers">
            <p className = "seller6">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
             <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "sellers">
            <p className = "seller7">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
             <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        
        

        


        </div>
        
   
    

    </div>
)
}

export default Employees;