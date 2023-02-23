import React from 'react';
import { useState } from 'react';


const Main = ({tasks,onDelete,onEdit,onAdd,onToggle}) => {
    const [task, setTask ] = useState('');
    const [check, setCheck] = useState(false);
    const [id,setID] = useState('');
    const submit = () =>{
        const x = document.querySelector('.btn').innerText;
        if(!task){
            alert("Task input field can't be empty");
        }else{
            x === 'Update' ? onEdit(id,task) : onAdd(task,check);
            setTask('');
            document.querySelector('.btn').innerText = "Add";
        }
       
    }
    const onEd = (id,text)=>{
        setTask(text);
        document.getElementById('new-task').value = text;
        document.querySelector('.btn').innerText = "Update";
        setID(id);
    }
    return (
        <>
            <div className="container">

                <h2>TODO LIST</h2>
                <h3>Add Item</h3>
                <p>
                    <input id="new-task" type="text" value={task}  onChange={(e)=>{setTask(e.target.value)}} /><button className="btn" onClick={submit}>Add</button>
                </p>

                <h3>Todo</h3>
                <ul id="incomplete-tasks" >
                    {tasks.map((val)=>{
                        return val.check ?<></>: <><li key={val.id}><input type="checkbox" className="checkbox" checked={val.check} onClick={(e)=>{onToggle(val.id)}} /><label>{val.task}</label><input type="text" /><button
                        className="edit" onClick={()=>{onEd(val.id,val.task)}}>Edit</button><button className="delete" onClick={()=>{onDelete(val.id)}}>Delete</button></li></>
                    })}
                </ul>

                <h3>Completed</h3>
                <ul id="completed-tasks">
                {tasks.map((val)=>{
                        return val.check ?<><li key={val.id}><input type="checkbox" className="checkbox" checked={val.check} onClick={(e)=>{onToggle(val.id)}} /><label>{val.task}</label><input type="text" /><button
                        className="edit" onClick={()=>{onEd(val.id,val.task)}}>Edit</button><button className="delete" onClick={()=>{onDelete(val.id)}}>Delete</button></li></>:<></>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Main;
