import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'

import StyledContainer from '~styles/StyledContainer'
import TodoListItem from '~components/TodoListItem'
import { useTodos } from '~providers/TodosProvider'

interface ITodoList {
    className: string
}

const TodoList: React.FC<ITodoList> = ({ className }) => {
    const { state } = useTodos()
    const { t } = useTranslation()

    if (state.todos.length === 0) return(
        <StyledContainer>
            <Typography>{t('todolist.no_todos')} <span role="img" aria-label="sad emoji">😞</span></Typography>
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