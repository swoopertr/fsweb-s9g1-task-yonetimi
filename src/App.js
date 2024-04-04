import { useState, useEffect } from "react";
import "./app.css";
import "./task.css";
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskHookForm from "./TaskHookForm";
import PeopleForm from "./PeopleForm";
import PeopleHookForm from "./PeopleHookForm";
import {DataUnit} from "./data"

function App() {
  const tasks_ = DataUnit.listAllTasks()
  const people_ = DataUnit.listPeople()
  const [tasks, setTasks] = useState(tasks_);
  const [team, setTeam] = useState(people_);


  // useEffect(() => {
  //   const tempTask = DataUnit.listAllTasks()
  //   const tempPeople = DataUnit.listPeople()
  //   setTasks(tempTask)
  //   setTeam(tempPeople)
  // }, []);

  function handleTaskSubmit(yeniTask) {
    DataUnit.saveTask(yeniTask);
    const allTasks = DataUnit.listAllTasks();
    setTasks(allTasks);
  }

  function handlePeopleSubmit(yeniKisi) {
    DataUnit.savePerson(yeniKisi);
    const allTeamMembers = DataUnit.listPeople();
    setTeam(allTeamMembers);
  }

  function handleComplete(id) {
   DataUnit.taskStateChange(id);
   const allTasks = DataUnit.listAllTasks();
   setTasks(allTasks);
  }

  return (
    <div className="app">
      <div className="formColumn">
        <div className="form-container">
          <h2>Yeni Task</h2>
          {/* <TaskForm kisiler={team} submitFn={handleTaskSubmit} /> */}
          <TaskHookForm kisiler={team} submitFn={handleTaskSubmit} />
        </div>

        <div className="form-container">
          <h2>Yeni Kişi</h2>
          <PeopleHookForm kisiler={team} submitFn={handlePeopleSubmit} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="column-title">Yapılacaklar</h2>
          <div className="column-list">
            {
              tasks 
              && 
              DataUnit.listUnfinishedTasks().map((t) => (
                <Task key={t.id} taskObj={t} onComplete={handleComplete} />
              ))
            }
          </div>
        </div>
        <div className="column">
          <h2 className="column-title">Tamamlananlar</h2>
          <div className="column-list">
            {
              tasks 
              && 
              DataUnit.listFinishedTasks().map((t) => (
                <Task key={t.id} taskObj={t} />
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
