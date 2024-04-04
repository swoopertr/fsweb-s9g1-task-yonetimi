import React from "react";

const Task = ({ taskObj, onComplete }) => {

  return (
    <div className="task">
      
      <h3 className={!taskObj.title ? 'red-h3' : ''} >{taskObj.title ? taskObj.title:"No title provided"}</h3>
      <p className={!taskObj.description ? 'red-p' : ''}>{taskObj.description ? taskObj.description:"No description provided"}</p>
      {taskObj.deadline && <p className="deadLine">Deadline: {taskObj.deadline}</p>}
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="btn-gokalp" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
