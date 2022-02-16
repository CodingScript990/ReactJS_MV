import { useState } from "react";

function ToDoList() {
  // toDo State value
  const [toDo, setToDo] = useState("");
  // toDos State array value
  const [toDos, setToDos] = useState([]);
  // toDo onChange event handler
  const onChange = (e) => setToDo(e.target.value);
  // toDo onSubmit event handler
  const onSubmit = (e) => {
    e.preventDefault();
    // toDo value === null, ""
    if (toDo === "" || toDo === null) {
      return;
    }
    // toDo is not null
    if (toDo !== "") {
      // setToDos array
      setToDos((currentArray) => [...currentArray, toDo]);
    }
    // setToDo value === ""
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write u r to do...."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
