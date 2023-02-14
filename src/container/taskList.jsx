import TaskComponent from "../pure/taskComponent.jsx";
import { LEVELS } from "../models/level.enum";
import { Task } from "../models/task.js";
import React from "react";

const taskList = () => {
  const changeState = (id) => console.log("cambiar tarea");
  const defaultTask = new Task(
    "Example",
    "default description",
    "false",
    LEVELS.NORMAL
  );

  return (
    <div className="md:container md:mx-auto">
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default taskList;
