const Form = ({ task, setTask, list, setList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...list];
    newList.push(task);
    setList(newList);
    setTask("");
  };

  const handleTask = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="new task"
        name="task"
        onChange={handleTask}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

export default Form;
