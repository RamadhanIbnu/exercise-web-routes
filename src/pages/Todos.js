import React, {useState} from 'react';
import '../style/Todo.css'
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

const Todos = () =>{
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([ 
        // {id:1, todo: "membuat todos"},
        // {id:2, todo: "belajar state"},
        // {id:3, todo: "tes todos"},
        // {id:4, todo: "belajar react"}, 
    ])

  // Menangani perubahan pada text input
  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  // Menambahkan todo
  const addTodo = (event) => {

    // button di dlm form akan melakukan refresh
    // kasih prevent default biar ga nge refresh
    event.preventDefault()

    let newTodo = {
      id: 1,
      todo: inputText 
    }

    if (todos.length > 0) {
      newTodo.id = todos[todos.length-1].id + 1
    }

    setTodos([...todos, newTodo])
    setInputText("")
  }

  // Menghapus todo
  const deleteTodo = (itemDel) => {
    let newTodos = todos.filter((item) => (item.id !== itemDel.id))

    setTodos(newTodos)
  }


  return (
    <Container>
      <Card className="container-todo-app">
        <h1>MAKE YOUR PLAN</h1>

        <Form.Group>
          <Form.Control className="control" type="text" onChange={handleChange} value={inputText} />
          <Button onClick={addTodo}>ADD</Button>
        </Form.Group>

        <Form.Group className="list">
       
          {todos.map((item, index) => (
            <div className="todo" key={index}>
              <Alert variant="info">{item.todo}</Alert>
              <Button className="button-label" onClick={() => {deleteTodo(item)}}> Remove </Button>
            </div>
          ))}
        </Form.Group>
        
      </Card>
    </Container>
  );
}

export default Todos;