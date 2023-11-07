import { useEffect , useState  } from 'react' 
import axios from 'axios'
// axios is a powerful library which is used in may highgrade projects. It also contains many utility tools in it

// axios is a library that dose the work of fetching data easily  it is a frame work 
// insted of the below code we can do 
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response) => response )
// .then(e=>e.json())
// .then((e) => setTodos(e as TodoItem[]));

// the same work by importing axios and the write the code as done in above 

interface TodoItem {
  completed:boolean
  id:number
  title:string 
  userId:number 
}

function App() {
  const  [todos , setTodos] = useState<TodoItem[]>([])
  
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response )
    .then(e=>e.json())
    .then((e) => setTodos(e as TodoItem[]));
  },[])
  
  // /we can write the code as 
  
  useEffect (() => {
    axios
    .get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos') // we can also tell the and specify the type of the data in which we need the data
    .then((response) =>  setTodos(response.data))
    // .then(e=>e.json()) no need to parse jason externally 
  },[])


  return (
      <div className="App">
       {
        todos.map((todo) => (
         <li key={todo.id}>{todo.title}</li>
       ))}
      </div>
  )
}

export default App;


