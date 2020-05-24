import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';

const initialTodos: Array<TodoType> = []

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodoType = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodoHandler: AddTodoHandlerType = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodoHandler: RemoveTodoHandlerType = (idx) => {
    console.log(idx)
    setTodos(todos.filter((_, i) => idx !== i))
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Typescript-Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed maxWidth="xs">
        <AddTodoForm addTodoHandler={addTodoHandler} />
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodoHandler={removeTodoHandler} />
      </Container>
    </>
  );
}

export default App;
