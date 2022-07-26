
import React,{useState} from 'react';
import Main from './main';

const App = () => {
  const [tasks,setTasks] = useState([
    {
        id:1,
        task:"Pay Bills",
        check:true
    },
    {
        id:2,
        task:"Go Shopping",
        check:true
    },
    {
        id:3,
        task:"See the Doctor",
        check:false
    }
]);

// To Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((val)=>val.id!==id))
}
// To Edit Task
const editTask = (id,task) =>{
  setTasks(tasks.map((val)=> val.id === id ? {id:val.id,task:task,check:val.check}:val))
}

// To Add Task
const addTask = (task,check)=>{
const id = Math.floor(Math.random()* 100)+1;
const newTask = {id,task,check};
setTasks([...tasks,newTask]);
}

// Toggle Check Uncheck
const toggleCheck = (id) =>{
  setTasks(tasks.map((val)=>val.id === id ? {...val,check: !val.check}:val))
}


  return (
   <><Main tasks={tasks} onDelete={deleteTask} onEdit={editTask} onAdd={addTask} onToggle={toggleCheck} /></>
  )
}

export default App;