import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Paper, Typography } from '@mui/material'

import Todo from '~components/Todo'
import { useTodos } from '~providers/TodosProvider'

interface ITodoList {
    className: string
}

interface IMemoizedTodo {
    todo: TodoType
}

const NoTodosText = styled(Typography)`
    padding: 8px;
`

const TodoList: React.FC<ITodoList> = ({ className }) => {
    const { state } = useTodos()
    const { t } = useTranslation()

    const MemoizedTodo: React.FC<IMemoizedTodo> = React.memo(({todo}) => (
        <Todo todo={todo} />
    ))

    if (state.todos.length === 0) return(
        <Paper className={className}>
            <NoTodosText>{t('todolist.no_todos')} <span role="img" aria-label="sad emoji">😞</span></NoTodosText>
        </Paper>
    )

    return (
        <Paper className={className}>
            {state.todos.map((todo) => (
                <MemoizedTodo todo={todo} key={todo.idx}/>
            ))}
        </Paper>
    )
}

export default TodoList