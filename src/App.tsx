import React, { Suspense } from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  AppBar,
  Toolbar
} from '@material-ui/core'

import Navbar from '~components/Navbar'
import TodoForm from '~components/TodoForm'
import TodoList from '~components/TodoList'
import TodosProvider from '~providers/TodosProvider'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F5F5F5;
  }
`

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 400px;

  .TodoList {
    margin-top: 16px;
  }
`

const AppFallback = () => (
  <AppBar>
    <Toolbar>
    </Toolbar>
  </AppBar>
)

const App = () => (
  <>
    <GlobalStyle/>
    <Suspense fallback={<AppFallback/>}>
      <Navbar/>
      <AppContainer>
        <TodosProvider>
          <TodoForm className="AddTodoForm" />
          <TodoList className="TodoList" />
        </TodosProvider>
      </AppContainer>
    </Suspense>
  </>
)

export default App;
