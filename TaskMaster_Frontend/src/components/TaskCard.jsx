import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deleteTask, updateTask } from "./Connection";

const STATUSES = ["backlog", "in-progress", "review", "done"];

function TaskCard({ task, onDelete, onUpdate }) {
  // Modal visibility state
  const [showEdit, setShowEdit] = useState(false);

  // Form state initialized with task data
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  // Handlers to open/close modal
  const handleEditShow = () => setShowEdit(true);
  const handleEditClose = () => setShowEdit(false);

  // Delete handler
  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      onDelete(task.id);
    } catch (error) {
      alert("Failed to delete task.");
      console.error(error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      id: task.id,
      name,
      description,
      status,
    };

    try {
      const updated = await updateTask(updatedTask);
      onUpdate(updated);
      handleEditClose();
    } catch (error) {
      alert("Failed to update task. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="task-card">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <div className="task-card-btn-group">
          <button className="btn btn-delete" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-edit" onClick={handleEditShow}>
            Edit
          </button>
        </div>
      </div>

      <Modal show={showEdit} onHide={handleEditClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleEditSubmit}>
          <Modal.Body>
            <Form.Group controlId="editName" className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="editDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="editStatus" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default TaskCard;
