export default function TaskItem({ task, onEdit, onDelete, onToggle }) {
  return (
    <div className="flex items-start justify-between p-3 bg-white rounded shadow-sm">
      <div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={!!task.completed}
            onChange={() => onToggle(task)}
            className="w-4 h-4"
          />
          <h3 className={`font-medium ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </h3>
        </div>
        {task.description && <p className="text-sm text-gray-600 mt-1">{task.description}</p>}
      </div>

      <div className="flex gap-2">
        <button className="px-2 py-1 text-sm bg-yellow-100 rounded" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="px-2 py-1 text-sm bg-red-100 rounded" onClick={() => onDelete(task._id || task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
