import React from 'react'
import { Typography } from '@material-ui/core'

import StyledContainer from '~components/StyledContainer'
import TodoListItem from './TodoListItem'
import { useTodos } from '~providers/TodosProvider'

interface ITodoList {
    className: string
}

const TodoList: React.FC<ITodoList> = ({ className }) => {
    const { state } = useTodos()

    if (state.todos.length === 0) return(
        <StyledContainer>
            <Typography>No todos <span role="img" aria-label="sad emoji">😞</span></Typography>
        </StyledContainer>
    )

    return (
        <div className={className}>
            {state.todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.idx}/>
            ))}
        </div>
    )
}

export default TodoList