import React from 'react'
import { 
    Checkbox,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    FormControlLabel,
    IconButton,
    Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface ITodoListItem {
    todo: TodoType,
    toggleTodo: ToggleTodoType,
    removeTodoHandler: RemoveTodoHandlerType,
    idx: number,
}

const TodoListItem: React.FC<ITodoListItem> = ({ todo, toggleTodo, removeTodoHandler, idx }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
            >
                <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={<Checkbox checked={todo.complete} onChange={() => toggleTodo(todo)}/>}
                    label={todo.title}
                />
                <IconButton
                    aria-label="Acknowledge"
                    onClick={(event) => {
                        event.stopPropagation()
                        removeTodoHandler(idx)
                    }}
                    onFocus={(event) => event.stopPropagation()}
                    style={{marginLeft: 'auto'}}
                >
                    <DeleteIcon />
                </IconButton>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{todo.text}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default TodoListItem