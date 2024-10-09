import { useState } from "react";

const Form = ({ addTask, setLang }) => {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && dueDate) {
      addTask({ text: taskText, dueDate, done: false });
      setTaskText("");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder={setLang === "en" ? "Add Task" : "Thêm Task"}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">
        {setLang === "en" ? "Add Task" : "Thêm Task"}
      </button>
    </form>
  );
};

export default Form;
