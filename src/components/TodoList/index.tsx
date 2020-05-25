import React from 'react'
import { Typography } from '@material-ui/core'

import StyledContainer from '../StyledContainer'
import TodoListItem from './TodoListItem'

interface ITodoList {
    className: string
    todos: Array<TodoType>
    toggleTodo: ToggleTodoType,
    removeTodoHandler: RemoveTodoHandlerType
}

const TodoList: React.FC<ITodoList> = ({ className, todos, toggleTodo, removeTodoHandler }) => {

    if (todos.length === 0) return(
        <StyledContainer>
            <Typography>No todos <span role="img" aria-label="sad emoji">😞</span></Typography>
        </StyledContainer>
    )

    return (
        <div className={className}>
            {todos.map((todo, idx) => (
                <TodoListItem todo={todo} toggleTodo={toggleTodo} removeTodoHandler={removeTodoHandler} idx={idx} key={idx}/>
            ))}
        </div>
    )
}

export default TodoList