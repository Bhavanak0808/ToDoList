import { useState } from "react"

const ToDoList = () => {
    let [task,setTask]=useState(""); //array destructuring
    let [taskArray,setTaskArray]=useState([]);
    let clickHandler = () =>{
        // console.log("hii")
        setTaskArray([...taskArray,task]);
        console.log(taskArray);
        document.getElementById('text').value ='';
    } 
    let onChangeHandler = (e) =>{
        //console.log(e);
        //console.log(e.target);
        console.log(e.target.value);
        setTask(e.target.value);
    }
    return ( <>
    .<div className="container text=cente mt-5 p-5 " >
    <div className="mb-3" >
        
      
        <label htmlFor="" className="form-label ">Task_Name</label>
        <input
            type="text"
            className="input"
            name=""
            id="text"
            aria-describedby="helpId"
            placeholder=""
            onChange = {onChangeHandler}
        /> 
         <span>  
        <button className="button" onClick={clickHandler}>Add Task</button>
         </span>
    </div>
    
    {/* {task} */}
    <ol>
    {
        taskArray.map((value,index)=>{
            return <div className="row"> <div className="col-md-1"></div> 
            <div className="col-md-3"> <li key={index}>{value}</li></div>
            </div>
            
        })
    }
    </ol> 
    </div>
    
    
    </> );
}
 
export default ToDoList;