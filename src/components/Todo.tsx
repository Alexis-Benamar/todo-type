import React from 'react'
import styled from 'styled-components'
import { 
    Checkbox,
    IconButton,
    Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import { useTodos } from '~providers/TodosProvider'

interface ITodoListItem {
    todo: TodoType,
}

const TodoContainer = styled.div`
    &:not(:last-child) {
        border-bottom: 2px solid #e8e8e8;
    }

    .todo-header {
        display: flex;
        align-items: center;

        .todo-delete-btn {
            margin-left: auto;
            padding: 8px;
        }
    }

    .todo-text {
        padding: 0 8px 8px;
        color: grey;
    }

    &.complete {
        background: #f8f8f8;
        color: #dcdcdc;

        .todo-text {
            color: #dcdcdc;
        }
    }
`

const Todo: React.FC<ITodoListItem> = React.memo(({ todo }) => {
    const { dispatch } = useTodos()

    return (
        <TodoContainer className={"Todo " + (todo.complete ? "complete" : "")}>
            <div className="todo-header">
                <Checkbox checked={todo.complete} onChange={() => dispatch({ type:"toggle", todo })}/>
                <Typography className="todo-title">{todo.title}</Typography>
                <IconButton className="todo-delete-btn" onClick={() => dispatch({ type: 'remove', idx: todo.idx })}>
                    <DeleteIcon />
                </IconButton>
            </div>
            {todo.text && 
                <Typography className="todo-text" variant="body2">{todo.text}</Typography>
            }
        </TodoContainer>
    )
})

export default Todo