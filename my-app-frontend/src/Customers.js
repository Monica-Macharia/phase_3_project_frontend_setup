import React, { useEffect, useState} from 'react';


function Customers(){
    const[customers, setCustomers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9292/customers")
        .then((r) => r.json())
        .then((customers) => setCustomers(customers));
    }, []);

    return (
    <div className="appBody">
        <p className= "customer"><h2>Customers</h2></p>
       
        <div className= "customers">
       
          {customers.map((customer) =>        
        <div className= "customer">
            <p className = "customer1">
            <b><em>Name:</em></b> {customer.name}<br/>
            <b><em>Location:</em></b> {customer.location}<br /> 
            <b><em>Contact:</em> </b>{customer.contact} <br />
            <b><em>Comment:</em></b> {customer.comment} <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>)}

        <div className= "customer">
            <p className = "customer2">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "customer">
            <p className = "customer3">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "customer">
            <p className = "customer4">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "customer">
            <p className = "customer5">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "customer">
            <p className = "customer6">
            Name: <br/>
            Location:<br /> 
            Contact: <br />
            Comment: <br />
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "customer">
            <p className = "customer7">
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

export default Customers;