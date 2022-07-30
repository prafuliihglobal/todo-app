import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [todo, setTodo] = useState([
    {
      name: "Task 1",
      completed: false,
    },
  ]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const addTask = () => {
    setTodo([
      ...todo,
      {
        name: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const removeTask = (index) => {
    let newList = todo.filter((i, taskIndex) => {
      return taskIndex !== index;
    });
    setTodo(newList);
    console.log("newList", newList);
  };

  return (
    <div className="App">
      <h1>TODOs</h1>

      <input placeholder="Todo" value={input} onChange={handleChange} />
      <button onClick={addTask}>Add</button>
      <ul>
        {todo.map((i, index) => (
          <li>
            {i.name}

            <p onClick={() => removeTask(index)}>
              <b>Remove</b>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
