import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { taskData } from "./components/Connection";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await taskData;
      setTasks(data);
    })();
  }, []);

  const afterAdding = (newTask) => {
    setTasks((task) => [newTask, ...task]);
  };

  const afterDelete = (id) => {
    const adelete = tasks.filter((task) => task.id !== id);
    setTasks(adelete);
  };

  const afterUpdate = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <div className="app-wrapper">
      <Header onSearch={setSearchTerm} onAddTask={afterAdding} />
      <Main
        term={searchTerm}
        tasks={tasks}
        onDelete={afterDelete}
        onUpdate={afterUpdate}
      />
      <Footer />
    </div>
  );
}

export default App;
