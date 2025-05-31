import TaskCard from "./TaskCard";

function Main({ term, tasks, onDelete, onUpdate }) {
  const STATUSES = ["backlog", "in-progress", "review", "done"];

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="main-container">
      {STATUSES.map((status) => (
        <div className="column" key={status}>
          <h1>{status.toUpperCase()}</h1>
          {filteredTasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TaskCard key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Main;
