import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
  return <div>
    {tasks.map(task => (
      <Task task={task} onDelete={onDelete} key={task.id} onToggleReminder={onToggleReminder}/>
    ))}
  </div>
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Tasks;
