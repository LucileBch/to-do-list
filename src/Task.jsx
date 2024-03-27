import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Task = ({ task, list, setList, index }) => {
  const [check, setCheck] = useState(false);

  const handleDelete = () => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleCheck = () => {
    setCheck(!check);
    if (check === false) {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      updatedList.push(task);
      setList(updatedList);
    } else {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      updatedList.unshift(task);
      setList(updatedList);
    }
  };

  return (
    <div className="task-line">
      <input
        check={check}
        type="checkbox"
        name="checkbox"
        onChange={handleCheck}
      />
      <p className={check === true ? "barre" : ""}>{task}</p>
      <FontAwesomeIcon icon="trash-can" onClick={handleDelete} />
    </div>
  );
};

export default Task;
