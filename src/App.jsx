import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashCan);

import Form from "./Form";
import Search from "./Search";
import Task from "./Task";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search
        list={list}
        setList={setList}
        search={search}
        setSearch={setSearch}
      />
      {list.map((task, index) => {
        return (
          <Task
            key={task}
            index={index}
            task={task}
            list={list}
            setList={setList}
          />
        );
      })}
      <Form task={task} setTask={setTask} list={list} setList={setList} />
    </div>
  );
}

export default App;
