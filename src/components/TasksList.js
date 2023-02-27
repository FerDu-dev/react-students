import {
    useDeleteTaskMutation,
    useGetTasksQuery,
    useUpdateTaskMutation,
  } from "../api/apiSlice";
  import '../styles/List.css'
  import { Button } from "react-bootstrap";
  
  const TasksList = () => {
    const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();
    const [updateTask] = useUpdateTaskMutation();
  
    if (isLoading) return <div>Loading...</div>;
    else if (isError) return <div>Error: {error.message}</div>;
  
    console.log(tasks);
  
    return (
    <div className="list-container">
        <div className="container px-8 d-flex justify-content-between">
            <div className="row">
                <ul className="list">
                    {tasks.map((task) => (
                    <li key={task.id} className='list-item'>
                        <label className="task-label">Tarea {task.id}</label>
                        <h3 className="task-name">{task.name}</h3>
                        <label className="task-label">Descripcion:</label>
                        <p className="task-description">{task.description}</p>
                        <label className="task-label">Fecha de entrega:</label>
                        <p className="task-date">{task.date}</p>
                        <div>
                            <input
                            type="checkbox"
                            id={task.id}
                            checked={task.completed}
                            onChange={(e) => {
                                updateTask({ ...task, completed: e.target.checked });
                            }}
                            />
                            <label htmlFor={task.id}>Completada</label>
                        </div>
                        <Button variant="danger" size="sm" className="btn-delete"
                        onClick={() => {
                            deleteTask(task.id);
                        }}
                        
                        >
                        Eliminar
                        </Button>
            
                      
                    </li>
                    ))}
                </ul>
            </div>
        
        </div>
    </div>
    );
  };
  
  export default TasksList;
  