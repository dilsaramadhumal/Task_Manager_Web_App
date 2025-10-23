import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // ✅ Fetch tasks from backend
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  // ✅ Add a new task
  const addTask = async () => {
    if (!newTask.trim()) return;
    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask }),
    });
    setNewTask("");
    fetchTasks();
  };

  // ✅ Delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-yellow-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Task Manager ✅</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="p-2 rounded text-black"
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-slate-800 flex justify-between items-center p-3 rounded mb-2"
          >
            <span>{task.title}</span>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-400 hover:text-red-600"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
