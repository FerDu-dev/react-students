import { useCreateTaskMutation } from "../api/apiSlice";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Form.css'

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const date = e.target.elements.date.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({ name, description, date, completed });
  };
  
  return (
    <div>
        <Button variant="primary" onClick={handleShow} className='btn-modal'>
            Crear tarea
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agrega una nueva tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit} className='task-form'>
            <label>Titulo de la tarea:</label>
            <input type="text" name="name" />
            <label>Fecha de entrega:</label>
            <input type="date" name="date" />
            <label>Descripcion:</label>
            <textarea name="description" />
            <div className="task-status">
                <label>Se completo la tarea?</label>
                <input type="checkbox" name="completed" />
            </div>
           
            <button type="submit" onClick={handleClose} className='btn-add'>Add Task</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>  
        </Modal.Footer>
      </Modal>
       
    </div>
  );
};

export default TaskForm;
