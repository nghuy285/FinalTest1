import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filterDone, setFilterDone] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (taskName) => {
    const updatedTasks = tasks.map((task) =>
      task.text === taskName ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateFilterDone = (newFilter) => {
    setFilterDone(newFilter);
    const newURL = new URL(window.location);
    if (newFilter) {
      newURL.searchParams.delete("withDone");
    } else {
      newURL.searchParams.set("withDone", "1");
    }
    navigate(newURL.pathname + newURL.search);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              addTask={addTask}
              toggleTask={toggleTask}
              filterDone={filterDone}
              setFilterDone={updateFilterDone}
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
            />
          }
        />
      </Routes>
      <Footer
        currentLanguage={currentLanguage}
        setLanguage={setCurrentLanguage}
      />
    </div>
  );
}

const Home = ({
  tasks,
  addTask,
  toggleTask,
  filterDone,
  setFilterDone,
  currentLanguage,
  setCurrentLanguage,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const withDone = queryParams.get("withDone");

  useEffect(() => {
    setFilterDone(withDone !== "1");
    // eslint-disable-next-line
  }, [withDone]);

  const filteredTasks =
    withDone === "1" ? tasks : tasks.filter((task) => !task.done);
  const undoneCount = filteredTasks.filter((task) => !task.done).length;

  return (
    <div className="container">
      <TodoListHeader
        undoneCount={undoneCount}
        filterDone={filterDone}
        setFilterDone={setFilterDone}
        currentLanguage={currentLanguage}
      />
      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        currentLanguage={currentLanguage}
      />
      <Form addTask={addTask} setLang={currentLanguage} />
    </div>
  );
};
