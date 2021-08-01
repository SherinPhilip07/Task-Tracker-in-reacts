import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText] =useState('')
    const [time,setTime] =useState('')
    const [reminder,setReminder] =useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if (!text){
            alert('Please add task')
            return
        }

        onAdd({text,time,reminder})

        setText('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Text</label>
                <input type='text' placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Time</label>
                <input type='text' placeholder="Add Time"value={time} onChange={(e)=> setTime(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block'
            type='submit' value="Submit" /> 
        </form>
    )
}

export default AddTask
