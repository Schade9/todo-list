import './App.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import firebase from "firebase";

function App() {

  const [todoInput, setTodoInput] = useState('');

  function addTodo() {
    e.preventDefault(); // prevent reload of page

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    
  }

  return (
    <div className="App" 
      style={{
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Schades Todos App</h1>
        <form>
          <TextField 
            id="standard-basic" 
            label="Write a Todo" 
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{maxWidth: "300px", width: "90vw"}}
          />
          <Button 
            type="submit" 
            variant="contained" 
            onClick={addTodo} 
            style={{display: "none"}}
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
