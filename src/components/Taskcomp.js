import Tasks from "./Tasks"
import { FaTimes } from 'react-icons/fa'

const Taskcomp = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}` } onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)}  style={{color:'red'}}/></h3>
            <p>{task.time}</p>
        </div> 
    )
}

export default Taskcomp
