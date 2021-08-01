import React from 'react'
import  Taskcomp  from './Taskcomp';

const Tasks = ({task,onDelete, onToggle}) => {
    
    return (
        <>
            {task.map((task) =>(
                // <h3 key={task.id}>{task.text}</h3>
                <Taskcomp key={task.id} task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
