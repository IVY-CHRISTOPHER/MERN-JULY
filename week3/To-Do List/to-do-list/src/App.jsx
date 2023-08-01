import { useState } from 'react'
import './App.css'

function App() {
  const [newTask , setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const submitNewTaskHandler = (e) => {
    e.preventDefault();

    if(newTask.length == 0){
      return;
    }

    const taskItem = {
      text: newTask,
      complete: false
    };

    setTasks([... tasks, taskItem])
    setNewTask('')
  }

  const handleDeleteTask = (delIndx) => {
    const filteredTasks = tasks.filter((tasks, i) => {
      return i !== delIndx;
    });

    setTasks(filteredTasks);
  }

  const handleTaskComplete = (indx) => {
    const updatedTasks = tasks.map((newTask, i) => {
      if (indx == i){
        newTask.complete = !newTask.complete;
        // industry standard to avoid mutating the task directly:
        // const updatedTask = {...newTask, complete: !newTask.complete};
        // return updatedTask;
      }

      return newTask; 
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Task Tracker</h1>
      <form onSubmit={(e) => {
        submitNewTaskHandler(e);
      }}>
        <input onChange={(e) => {
          setNewTask(e.target.value);
          }} 
          type="text" value={newTask} />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {
        tasks.map((newTask, i) => {
          const taskClasses = ["bold", "italic"];

          if(newTask.complete) {
            taskClasses.push("line-through");
          }

          return <div key={i}>
            <span className={taskClasses.join(" ")}>{newTask.text}</span>
            <input onChange={(e) => {
              handleTaskComplete(i);
            }} checked={newTask.complete} type="checkbox" />
            <button style={{marginLeft: "10px"}} onClick={(e) => {
              handleDeleteTask(i);}}>Delete</button>
            </div>
        })
      }
    </div>
  )
}

export default App
