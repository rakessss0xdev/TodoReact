import './App.css'

function App() {
  return (
    <div style={{height: '100vh', margin: '0'}}>
      <h3>
        Todo List                
      </h3>
      <TodoLogic/>
    </div>
  )
}

function TodoLogic() {
  return (
    <div id='container' style={{ height: "500px", margin: "10px", backgroundColor: "white", width: "500px" }}>
      <input type={'text'} 
      placeholder={"Add Your Todos"}
      style={{padding: "10px", margin: "20px", borderRadius: "10px"}}/>
    </div>       
  );
}



export default App
