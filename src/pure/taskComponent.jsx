import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../models/task";

const taskComponent = ({ task }) => {
  useEffect(()=>{
    console.log('Creando Task')
    return()=>{
      console.log(`Task: ${task.name} is going to unmount`)
    }
  },[task]);
  return (
   <tr >  
      <td  className="p-4  "><span>{task.name}</span></td>
      <td  className="p-4  "><span>{task.description}</span></td>
      <td  className="p-4  "><span>{task.level}</span></td>
      <td  className="p-4  "><span>{task.completed}</span></td>
    </tr>
  
    // <div className="  bg-white">
    //   <h2 className="font-bold">Nombre: {task.name}</h2>
    //   <h3 className="font-bold">Description: {task.description}</h3>
    //   <h4 className="font-bold">Level: {task.level}</h4>
    //   <h5 className="font-bold">
    //     this task is: 
    //     <span>{task.completed ? "COMPLETED" : "PENDING"}</span>
    //   </h5>
    // </div>
  );
};

taskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default taskComponent;
