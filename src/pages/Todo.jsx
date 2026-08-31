import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      text: "Complete React project",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React Router",
      completed: true,
    },
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  }
  return (
    <div className="page todo-page">
      <div className="page-heading">
        <h1>To-Do App</h1>
        <p>Add your daily tasks and manage them easily.</p>
      </div>

      <div className="todo-container">
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-task">No tasks yet. Add your first task!</p>
          ) : (
            tasks.map((item) => (
              <div className="task-item" key={item.id}>
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                  />
                  <span className={item.completed ? "completed" : ""}>
                    {item.text}
                  </span>
                </div>
                <button className="delete-btn" onClick={() => deleteTask(item.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
