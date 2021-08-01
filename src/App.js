import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import  Tasks  from './components/Tasks';
import  AddTask  from './components/AddTask';
import  Foote  from './components/Foote';
import  About  from './components/About';
import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'




const App=()=> {
  const [show,setShow]=useState(false)
  const [task,setTask] =useState([])

  useEffect(()=>{
    const gettask=async()=>{
      const taskfromserver=await fetchtask()
      setTask(taskfromserver)
    }
    gettask()

  },[])

  const fetchtask=async()=>{
    const res= await fetch('http://localhost:5000/task')
    const data=await res.json()
    return data
  }
  const fetchone=async(id)=>{
    const res= await fetch(`http://localhost:5000/task/${id}`)
    const data=await res.json()
    return data
  }
  

const addtask=async(abc)=>{  
  const res= await fetch('http://localhost:5000/task',{
    method:'Post',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(abc)
  })

  const data=await res.json()
  setTask([...task,data])
  // // const id= Math.floor(Math.random()*10000)+1
  
  // const newt={ id,...abc}
  // // console.log(abc)
  // setTask([...task,newt])
}


const deletetask=async(id)=>{
  await fetch(`http://localhost:5000/task/${id}`,{
    method:"Delete"

})
  setTask(task.filter((task)=> task.id!==id))
}

const toggle=async(id)=>{
  const tasktotoggle=await fetchone(id)
  const update={...tasktotoggle,reminder:!tasktotoggle.reminder}
  const res= await fetch(`http://localhost:5000/task/${id}`,{
    method:'Put',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(update)
  })
  const data=await res.json()
  setTask(
    task.map((task)=>
    task.id===id ? {...task, 
      reminder:data
      .reminder}
      :task))
}

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=> setShow(!show)}  showAdd={show} title='Task Tracker' />    
      
      <Route path='/' eaxct render={(props)=>(
        <>
        {show && <AddTask onAdd={addtask}/>}
       
       {task.length > 0  ?
       (<Tasks task={task} onDelete={deletetask} onToggle={toggle}/>)
       :('No Task')}
        </>
      )}/>
      <Route path='/about' component={About}/>
      <Foote/>
      
    </div>
    </Router>
  )
}

export default App;
