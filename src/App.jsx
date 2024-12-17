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
      <Todologic task={task} settask={settask} addTask={addTask}/>
    <div>
      {tasks.map((t) => {
      return (
        <div 
          key={t.id}
          style={{
            padding: "10px",
            margin: "20px",
            borderRadius: "5px",
            display: "inline-block"
          }}
        >
          <span>{t.text}</span>
        </div>
      );
      })}
    </div>
  </div>
  )
}

function Todologic({addTask, settask, task }) {
  return (
    <div
      id="container"
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
        onChange={(e) => settask(e.target.value)}
        style={{padding: "10px", margin: "20px", borderRadius: "10px"}}
      />
      <button 
        onClick={addTask}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          border: "none",
          backgroundColor: "#61dafb"
        }}
      >
      Add Task
      </button>
    </div>
  )
}

export default App