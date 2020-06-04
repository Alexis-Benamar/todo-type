import React, { Suspense } from 'react';
import { createGlobalStyle } from 'styled-components'
import {
  AppBar,
  Toolbar
} from '@material-ui/core'

import AddTodoForm from '~components/AddTodoForm'
import Navbar from '~components/Navbar'
import AppContainer from '~styles/AppContainer'
import TodoList from '~components/TodoList'
import TodosProvider from '~providers/TodosProvider'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F5F5F5
  }
`

const AppFallback = () => (
  <AppBar>
    <Toolbar>
    </Toolbar>
  </AppBar>
)

const App = () => (
  <TodosProvider>
    <GlobalStyle/>
    <Suspense fallback={<AppFallback/>}>
      <Navbar/>
      <AppContainer>
        <AddTodoForm className="AddTodoForm" />
        <TodoList className="TodoList" />
      </AppContainer>
    </Suspense>
  </TodosProvider>
)

export default App;
