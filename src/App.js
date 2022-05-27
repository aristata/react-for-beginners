import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    console.log(toDo);
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  return (
    <>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type={"text"} placeholder={"Write your to do..."} value={toDo} onChange={onChange}/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((toDo, index) => {
          return <li key={`toDo ${index}`}>{toDo}</li>
        })}
      </ul>
    </>
  );
}

export default App;
