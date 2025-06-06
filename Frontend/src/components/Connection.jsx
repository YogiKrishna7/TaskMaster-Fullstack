const url = "http://localhost:8080/taskmaster";

export const getTaskList = async () => {
  const res = await fetch(`${url}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const objectData = await res.json();
  return objectData;
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${url}/delete/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  return taskId;
};

export const addTask = async (newTask) => {
  const response = await fetch(`${url}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  if (!response.ok) {
    throw new Error("Failed to add task");
  }

  const data = await response.json();
  return data;
};

export const updateTask = async (updatedTask) => {
  const response = await fetch(`${url}/update/${updatedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  const data = await response.json();
  return data;
};
