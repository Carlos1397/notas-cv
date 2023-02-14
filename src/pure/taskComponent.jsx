import React from "react";
import PropTypes from "prop-types";
import { Task } from "../models/task";

const taskComponent = ({ task }) => {
  return (
    <div className="  px-4 py-4  bg-white">
      <h2>Nombre: {task.name}</h2>
      <h3>Description: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>
        this task is: <span>{task.completed ? "COMPLETED" : "PENDING"}</span>
      </h5>
    </div>
  );
};

taskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default taskComponent;
