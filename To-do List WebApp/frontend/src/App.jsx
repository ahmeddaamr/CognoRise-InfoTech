import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    
  const [todolist,setTodolist] =useState([])
  const [rerender,setRerender] =useState(0)//for rerendering
  const [task,setTask] = useState();//for create operation
  //create
  const handleAdd = () => {
    axios.post('http://localhost:3001/add',{task: task})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))  
  };
  //Read
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodolist(result.data))
    .catch(err => console.log(err))
  },[rerender])
  //Update
  const handleEdit = (id,updatedTask) => {
    axios.put(`http://localhost:3001/update/${id}`,{updatedTask})
      .then(result => {
        console.log("sent to backend successfuly " ,result);
        setRerender(rerender + 1);
      })
      .catch(err => console.log("An error occurred while send update to backend ",err));
  };
  
  //Delete
  const handleDelete =(id)=> {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result=>{setRerender(rerender+1)})
    .catch(err=>console.log(err))  
    }

    const [isChecked , setIsChecked] = useState(false)

    const handleChange =()=>{
      const checkbox = document.getElementById('myCheckbox');
    if (checkbox.checked) {
       setIsChecked(true)
    } else {
        setIsChecked(false)
    }
    }
      
  return (
    <>
    <div className='content'>
      <h1>Todo List </h1>
      {/* <Add /> */}
      <div className ="addTask">
        <form className='addForm'>
          <input type="text" className="addText" id="addText" placeholder="Add Task Here!" onChange={(e)=>setTask(e.target.value)}/>
          <button type="submit" className='addButton' onClick={handleAdd}>Add</button>
        </form>
      </div>
      <div className="tasks">
      {
        todolist.length == 0 ?
        <h2>no current tasks</h2>
        : 
        todolist.map(todo=>(
          <div className="task" key={todo._id}>
            {/* <div className="checkbox"> */}
            <input type="checkbox" id="myCheckbox" onChange={handleChange} />
            {/* </div> */}
            <form onSubmit={(e) => e.preventDefault()}>
              <input 
              type="text"
              className="taskText"
              style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
              defaultValue={todo.task} 
              onBlur={(e) => {
                handleEdit(todo._id,e.target.value);
              }} />
            </form>
            <div >
              {/* <button type="submit" className='editButton' onClick={()=>handleEdit(todo._id)}>Edit</button> */}
              <button type="submit" className='deleteButton' onClick={()=>handleDelete(todo._id)}>Delete</button>
              {/* <button type="button" className="btn btn-danger">bootstrap</button> */}
            </div>
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default App
