import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const addTodo = props.addTodo;
    
  return <form className="todo-form" onSubmit={(event) => { 
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
     }}>
    <input placeholder="What's going on?" value={newTodo} onChange={(event) => {
        setNewTodo(event.target.value)
    }}></input>
    <button type='submit'>Add to List</button>
    
  </form>
}

const TodoList = (props) => {
    const todoList = props.todoList;
    const list = todoList.map((listItem) => <h3 key={listItem}>{listItem}</h3>);
  return (<div className="todo-list" >
    {list}
  </div>);
}

const Todo = (props) => {
    const [todoList, setTodoList] = useState([]);
    const addTodo = (todo) => {
        setTodoList([...todoList, todo]);
    }
  return <div className="todo">
    <TodoForm addTodo={addTodo}/>
    <TodoList todoList={todoList} />
  </div>
}

export default Todo;