import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    
  const [todolist,setTodolist] =useState([])
  const [rerender,setRerender] =useState(0)//for rerendering
  const [task,setTask] = useState();//for create operation
  //create
  const handleAdd = (e) => {
    e.preventDefault(); // Prevent form submission
    axios.post('http://localhost:3001/add',{task: task})
    .then(result=>{
      // console.log(result)
      setRerender(rerender+1)
    })
    .catch(err=>console.log(err))  
  };
  //Read
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodolist(result.data))
    .catch(err => console.log(err))
  },[rerender])
  
  //Update
  const handleEdit = (id, updatedTask, checked) => {
    axios.put(`http://localhost:3001/update/${id}`, { updatedTask, checked })
        .then(result => {
            console.log("Task updated successfully", result);
            setRerender(rerender + 1);
        })
        .catch(err => console.log("An error occurred while updating the task", err));
  };
  
  //Delete
  const handleDelete =(id)=> {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result=>{setRerender(rerender+1)})
    .catch(err=>console.log(err))  
    }
      
  return (
    <>
    <div className='content bg-dark'>
      <h1 className='text-light'>Todo List </h1>
      <div className ="addTask bg-dark">
        <form className='addForm form-control bg-dark'>
          <input type="text" className="addText" id="addText" placeholder="Add Task Here!" onChange={(e)=>setTask(e.target.value)}/>
          <button type="submit" className='btn btn-outline-primary addButton' onClick={handleAdd}>Add</button>
        </form>
      </div>
      <div className="tasks">
      {
        todolist.length == 0 ?
        <h2 className='text-light'>no current tasks</h2>
        : 
        todolist.map(todo=>(
          <div className="task" key={todo._id} >
            <input className='form-check-input' type="checkbox" id="myCheckbox" 
             checked={todo.checked}
             onChange={(e) => {
               const updatedChecked = e.target.checked;
               handleEdit(todo._id, todo.task, updatedChecked);}
               }/>
            <form className='Edit form-control bg-dark ' onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="taskText form-control text-light bg-dark"defaultValue={todo.task} 
              onBlur={(e) => {handleEdit(todo._id,e.target.value, todo.checked);}}
              style={{ textDecoration: todo.checked ? 'line-through' : 'none' }} />
            </form>
            <button type="submit" className='deleteButton btn btn-outline-danger' onClick={()=>handleDelete(todo._id)}>Delete</button>
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default App
