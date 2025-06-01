import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addTask } from "./Connection";

const STATUSES = ["backlog", "in-progress", "review", "done"];

function TaskBtn({ onTaskCreated }) {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskStatus, setTaskStatus] = useState(STATUSES[0]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      name: taskName,
      description: taskDesc,
      status: taskStatus,
    };

    try {
      const data = await addTask(newTask);

      if (onTaskCreated) {
        onTaskCreated(data);
      }

      setTaskName("");
      setTaskDesc("");
      setTaskStatus(STATUSES[0]);
      handleClose();
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task. Please try again.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Task
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="taskName" className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="taskDesc" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="taskStatus" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                {STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create Task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default TaskBtn;
