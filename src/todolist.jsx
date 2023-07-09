import List from '@mui/material/List';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import TodoItem from './todoItem';
import TodoForm from './todoform'
const getInitialToDos = ()=>{
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data) return [];
    return data
}
export default function ToDoList(){
    const [ToDos,setToDos] = useState(getInitialToDos) 

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(ToDos))
    },[ToDos])

    const removeTodo =(id)=>{
        setToDos(prevtodo => {
            return prevtodo.filter(t => t.id !== id)
        })
    }

    const toggleTodo = (id) =>{
        setToDos(prevtodo =>{
            return prevtodo.map(todo =>{
                if(todo.id === id){
                    return {...todo, completed: !todo.completed}
                }
                else{
                    return todo
                }
            })
        })
    }
    const addTodo = (text)=>{
        setToDos(prevtodo => {
           return [...prevtodo,{text:text, id:crypto.randomUUID(), completed:false}]
        })
    }

    return <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        alignItems: 'center'
    }}>
        <h1>To-Do's</h1>
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {ToDos.map(todo =>{
          return  <TodoItem todo={todo} key={todo.id} removeTodo={()=>removeTodo(todo.id)} toggleTodo={()=>toggleTodo(todo.id)}/> 
          })}
        <TodoForm addTodo={addTodo} />  
    </List>
    </Box>
}
// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
        
//     </List>
//   );
// }