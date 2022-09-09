import React from 'react';


function Tasks(){
    return (
    <div className="appBody">
        <p className= "order"><h2>Today's Tasks!</h2></p>
       
        <div className= "orders">
       
        
        
        <div className= "tasker">
            <p className = "tasker1">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker2">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker3">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker4">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker5">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker6">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker7">
            Name: <br/>
            Price:<br /> 
            Status: <br />
            Customer_id: <br />
            Employee_id: <br />
            <div className = "updater">
                <button>Change Price</button>
            </div>
            <div className = "deleter">
                <button>Delete</button>
            </div>
         </p>
        </div>

       
            <form className = "formTask">
                <label>
                    Name:
                    <input type = "text" name="name" value= "value" />
                </label>
                <label>
                    Price:
                    <input type = "number" name="price" value= "value" />
                </label>
                <label>
                    Status:
                    <input type = "text" name="status" value= "value" />
                </label>
                <label>
                    Customer_id:
                    <input type = "number" name="customer_id" value= "value" />
                </label>
                <label>
                    Employee_id:
                    <input type = "number" name="number" value= "value" />
                </label>
                <label>
             <input type="submit" name="Submit" />
         </label>
        </form>
       
     
        

        


        </div>
        
   
    

    </div>
)
}

export default Tasks;