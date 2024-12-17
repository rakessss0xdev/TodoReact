import React, {useState} from "react";
import './App.css';

function App() {
  const [ task, settask ] = useState('')
  const [ tasks, settasks ] = useState([]);
  
  const addTask = () => {
    if(task.trim() !== ""){
      settasks([...tasks, {id: Date.now(), text: task}])
      settask('');
    }
  }

  return (
    <div style={{height: "100vh", margin: "0", textAlign: "center"}}>
      <h3>Todo App</h3>
      <todologic task={task} tasks={settasks} addTask={addTask} />

    <div>
      {task.map((t) => {
        <div
          key={t.id}
          style={{
            margin: "10px",
            borderRadius: "5px",
            padding: "10px",
            display: "inline-block"
          }}
        >
          <span>
            {t.text}
          </span>
        </div>
      })}
    </div>
  </div>
  )
}

function todologic({addTask, todologic, task }) {
  return (
    <div
      id="conatiner"
      style={{
        height: "150px",
        margin: "10px auto",
        backgroundColor: "white",
        width: "500px",
        borderRadius: "5px"
      }}
    >
      <input 
        type="text"
        placeholder="Add your Todos"
        value={task}
        
    </div>
  )
}