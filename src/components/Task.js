import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggleReminder }) => {
  const onTaskDelete = () => {
    onDelete(task.id)
  }

  return <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
    <h3>
      {task.text}
      <FaTimes style={{ color: 'red' }} onClick={onTaskDelete} />
    </h3>
    <p>{task.day}</p>
  </div>;
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Task;
