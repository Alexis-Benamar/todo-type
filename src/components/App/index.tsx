import React, { useState } from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'
import { createGlobalStyle } from 'styled-components'

import AddTodoForm from '../AddTodoForm'
import { StyledAppContainer } from './styles'
import TodoList from '../TodoList'

const initialTodos: Array<TodoType> = []

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F5F5F5
  }
`

const App = () => {
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
    setTodos(todos.filter((todo) => idx !== todo.idx))
  }

  return (
    <>
      <GlobalStyle/>
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
      <StyledAppContainer>
        <AddTodoForm className="AddTodoForm" addTodoHandler={addTodoHandler} />
        <TodoList className="TodoList" todos={todos} toggleTodo={toggleTodo} removeTodoHandler={removeTodoHandler} />
      </StyledAppContainer>
    </>
  );
}

export default App;
