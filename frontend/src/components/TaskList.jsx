import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks || tasks.length === 0) {
    return <p className="p-4 text-center text-gray-600">No tasks yet — add one!</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <TaskItem key={t._id || t.id} task={t} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}
