import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filterCompleted, setFilterCompleted] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName.trim()) {
      setTasks([...tasks, { name: newTaskName, completed: false }]);
      setNewTaskName('');
    }
  };
  
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleFilter = () => {
    setFilterCompleted(!filterCompleted);
  };

  const filteredTasks = filterCompleted
    ? tasks.filter((task) => task.completed)
    : tasks;

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTask}>Adicionar tarefa</button>
      <button onClick={toggleFilter}>
        {filterCompleted ? 'Mostrar todas as tarefas' : 'Mostrar todas as tarefas completas'}
      </button>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? 'Marque como incompleto' : 'Marque como completo'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;