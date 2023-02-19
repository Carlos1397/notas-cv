import TaskComponent from "../pure/taskComponent.jsx";
import { LEVELS } from "../models/level.enum";
import { Task } from "../models/task.js";
import React,{useEffect, useState} from "react";

const taskList = () => {
  // estado de componente
  const defaultTask = new Task(
    "default title",
    "default description",
    "false",
    LEVELS.NORMAL
  );

  const [task, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true)

  //control del ciclo de vida del componente
  useEffect(()=>{
    console.log('Task state has been modified');
    setLoading(false);
    return ()=>{
      console.log(`TaskList component is going to unmount..`)
    }
  },[task])

  


  const changeState = (id) => console.log("cambiar tarea");


  return (  
     <>
     <div className="h-full flex flex-col ">  
     <p className="font-bold">Se mostraran las notitas.</p> 
        <table className="  divide-y "> 
            <thead className="bg-white">
              <tr className="font-sans font-black">
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Actions</th>        
              </tr>
            </thead>
            <tbody className="font-sans bg-white" > 
            <TaskComponent task={defaultTask}></TaskComponent> 
            <TaskComponent task={defaultTask}></TaskComponent> 
            <TaskComponent task={defaultTask}></TaskComponent> 

            </tbody>
          </table>     
      </div></> 
          
   
  );
};

export default taskList;
