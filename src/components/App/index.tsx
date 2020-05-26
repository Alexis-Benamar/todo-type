import React from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'
import { createGlobalStyle } from 'styled-components'

import AddTodoForm from '~components/AddTodoForm'
import { StyledAppContainer } from './styles'
import TodoList from '~components/TodoList'
import TodosProvider from '~providers/TodosProvider'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F5F5F5
  }
`

const App = () => {
  return (
    <TodosProvider>
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
        <AddTodoForm className="AddTodoForm" />
        <TodoList className="TodoList" />
      </StyledAppContainer>
    </TodosProvider>
  );
}

export default App;
