import { useEffect, useState ,useRef } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const inputref =useRef();
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [forreren, setforreren] = useState()
  const [showFinished , setshowFinished] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("todos"))
      {
        settodos(JSON.parse(localStorage.getItem("todos")))
        console.log(todos);
      }
      
    },[])
    const togglefinshied =()=>{
      setshowFinished(!showFinished)

    }
    useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  const handleedit = (e , id) => {  
    console.log(" i am edit");
    
   settodo(todos.filter(item=>item.id===id)[0].todo);
   inputref.current.focus();
   settodos(todos.filter(item=>item.id!=id))

    
  }
  const handledelete = (e) => {
    console.log(" i am delete");
    settodos(todos.filter(item=>item.id!=e))
  }
  const handleadd = () => {
    if(todo){
      settodos([...todos, { id: uuidv4(), todo, iscompleted: false }])
      settodo("")
      console.log(" i add todo");
    }      
    if(!todo){
      alert("Todo Can not be empty")
    }
  }
  const handlechange = (e) => {
    console.log(" i am change ");
    
    settodo(e.target.value)
  }
  const handlecheakbox = (e) => {
       const id = e.target.name;
       console.log("i am handlecheak");
       
      settodos(todos.map(item=>item.id===id?{...item ,iscompleted:e.target.checked}:item))
    }
    const handlekey=(e)=>{
      if(e.key ==="Enter")
        handleadd();
    }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-7 bg-violet-300  rounded-lg p-3 font-bold">
        <div className="addTodo">
          <h2>Add Todos</h2>
          <div className='flex w-full'>
          <input ref={inputref} onKeyDown={handlekey} onChange={handlechange} value={todo} type="text" className=' w-[90%] rounded-full px-3'/>
          <button onClick={handleadd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-full mx-3'>Save</button>
          </div>
        </div>
        <input className='my-3 mx-1' type="checkbox" checked={showFinished} onChange={togglefinshied}  name="" id="" />Show Finished
        <hr />
       <h2 className='text-lg font-bold my-2'> Your Todos :</h2>
        <div className="todos">
          {todos.length===0 && <span>No Todo In List</span>}
         
         {todos.map(item => {
            return (showFinished || !item.iscompleted) && <div key={item.id} id={item.id} className="todo flex my-3  justify-between p-2 rounded-md">
            <div className='flex'>
              <input type="checkbox" onChange={handlecheakbox} checked={item.iscompleted} name={item.id} className='mx-2' />
              <div className={item.iscompleted ? "line-through" : ""}>{item.todo}</div>
            </div>
              <div className="buttons ">
                <button onClick={(e)=>handleedit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2 '><FaEdit /></button>
                <button  onClick={(e)=>handledelete(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md '><MdDelete /></button>
              </div>
            </div>
          })
        }
        </div>
      </div>
    </>
  )

}
export default App





















