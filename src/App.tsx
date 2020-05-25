import React, { useState } from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'

import './App.css'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'

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
        <Container fixed>
          <Toolbar>
            <Typography variant="h6">
              TodoType
            </Typography>
            <IconButton style={{color: 'white', marginLeft: 'auto'}} href="https://github.com/Alexis-Benamar/todo-type" target="_blank">
              <GithubIcon/>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed maxWidth="xs">
        <AddTodoForm addTodoHandler={addTodoHandler} />
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodoHandler={removeTodoHandler} />
      </Container>
    </>
  );
}

export default App;
