import React from 'react';


function Tasks(){
    return (
    <div className="appBody">
        <p className= "order"><h2>Today's Tasks!</h2></p>
       
        <div className= "orders">
       
        
        
        <div className= "tasker">
            <p className = "tasker1">
            <span><b>Today</b>
            </span><br/>

            
           <span>9:40 AM 
            </span><br/>
           <span>October 7
            </span>
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker2">
           <span><b>Messages</b>
            </span><br/>
           <span>30 unread messages
            </span>
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker3">
           <span><b>Pending Tasks</b> 
            </span><br/>
           <span>70 pending
            </span>
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker4">
           <span><b>Monthly Sales Target</b>
            </span><br/>
           <span> $45000
            </span>
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker5">
            <span><b>Today</b>
            </span><br/>
           <span>9:40 AM 
            </span><br/>
           <span>October 7
            </span>
            <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker6">
           <span><b>Messages</b>
            </span><br/>
           <span>30 unread messages
            </span> <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker7">
           <span><b>Pending Tasks</b> 
            </span><br/>
           <span>70 pending
            </span> <div className = "delete">
                <button>Delete</button>
            </div>
         </p>
        </div>

        <div className= "tasker">
            <p className = "tasker8">
            <div className = "plus">
                <h1 className = "plusplus"> <b>+</b> </h1>
            </div>
         </p>
        </div>
        

        


        </div>
        
   
    

    </div>
)
}

export default Tasks;