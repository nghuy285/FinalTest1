import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, toggleTask, currentLanguage }) => {
  return (
    <div className="todo-list-container">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={index}
            className="todo-item-container"
            onClick={() => toggleTask(task.text)}
          >
            {task.done ? (
              <FaRegCheckCircle color="#9a9a9a" />
            ) : (
              <FaRegCircle color="#9a9a9a" />
            )}
            <div className="item-title">
              {task.text} - {currentLanguage === "en" ? "Due" : "Hạn cuối"}:{" "}
              {task.dueDate}
            </div>
          </div>
        ))
      ) : (
        <div>
          {currentLanguage === "en"
            ? "No tasks available"
            : "Không có nhiệm vụ nào"}
        </div>
      )}
    </div>
  );
};

export default TodoList;
