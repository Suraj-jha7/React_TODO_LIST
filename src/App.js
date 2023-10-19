// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import AddTodo  from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }

  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }


  const addTodo =(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length==0)
    {
      sno=1;
    }
    else{
     sno=todos[todos.length-1].sno+1;
    }
    let myTodo={
      sno:sno,
      title:title,
      Desc:desc,

    }

    setTodos([...todos,myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos",JSON.stringify((todos)));
   
  }

  const onDelete=(todo)=>{
    console.log("I am ondelete of",todo);

    //Deleting this way in react does not work
    // const index=todos.indexOf(todo);
    // todos.slice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

    localStorage.setItem("todos",JSON.stringify((todos)));



  }
  const [todos, setTodos] = useState(initTodo);
  // [
    // {
    //   sno:1,
    //   title:"Go to the market",
    //   Desc:"you need to go to the market to get this job done"
    // },
    // {
    //   sno:2,
    //   title:"Go to the Gym",
    //   Desc:"you need to go to the market to get this job done"
    // },
    // {
    //   sno:3,
    //   title:"Go to the mall",
    //   Desc:"you need to go to the market to get this job done"
    // }
  //]

  return (
   <>
    <Header title=" My Todo List" searchBar={false} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    
   </>
  );
}

export default App;
