import React from 'react'
import { 
    Checkbox,
    ExpansionPanel,
    ExpansionPanelDetails,
    FormControlLabel,
    IconButton,
    Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { StyledTodoSummary } from './styles'
import { useTodos } from '~providers/TodosProvider'

interface ITodoListItem {
    todo: TodoType,
}

const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
    const { dispatch } = useTodos() 

    return (
        <ExpansionPanel>
            <StyledTodoSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                className={todo.complete ? 'complete' : ''}
            >
                <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox checked={todo.complete} onChange={() => console.log('toggleTodo')}/>}
                    label={todo.title}
                />
                <IconButton
                    aria-label="Acknowledge"
                    onClick={(event) => {
                        event.stopPropagation()
                        dispatch({ type: 'remove', idx: todo.idx })
                    }}
                    onFocus={(event) => event.stopPropagation()}
                    style={{marginLeft: 'auto'}}
                >
                    <DeleteIcon />
                </IconButton>
            </StyledTodoSummary>
            <ExpansionPanelDetails>
                <Typography>{todo.text}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default TodoListItem