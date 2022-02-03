import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add task!')
      return
    }

    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return <div>
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' value={text} onChange={ (e) => setText(
          e.target.value
        )} />
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input type='text' value={day} onChange={ (e) => setDay(
          e.target.value
        )} />      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder} checked={reminder}
          onChange={ (e) => setReminder(
            e.target.checked
          )}/>
      </div>
      <button className='btn btn-block' type='submit'>Add Task</button>
    </form>
  </div>;
};

export default AddTask;
