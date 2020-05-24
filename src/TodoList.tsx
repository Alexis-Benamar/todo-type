import React from 'react'
import { Typography } from '@material-ui/core'

import TodoListItem from './TodoListItem'

interface ITodoList {
    todos: Array<TodoType>
    toggleTodo: ToggleTodoType,
    removeTodoHandler: RemoveTodoHandlerType
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, removeTodoHandler }) => {

    if (todos.length === 0) return <Typography>No todos</Typography>

    return (
        <div style={{padding: '24px', backgroundColor: '#f5f5f5'}}>
            {todos.map((todo, idx) => (
                <TodoListItem todo={todo} toggleTodo={toggleTodo} removeTodoHandler={removeTodoHandler} idx={idx} key={idx}/>
            ))}
        </div>
    )
}

export default TodoList