import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'

import StyledContainer from '~components/StyledContainer'
import { StyledTodoForm } from './styles'
import { useTodos } from '~providers/TodosProvider'

interface IAddTodoForm {
    className: string,
}

const AddTodoForm: React.FC<IAddTodoForm> = ({ className }) => {
    const { dispatch } = useTodos()

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data: any) => {
        dispatch({
            type: 'add',
            newTodo: {
                ...data,
                idx: Date.now(),
                complete: false
            }
        })
        reset()
    }

    return (
        <StyledContainer className={className} >
            <StyledTodoForm onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    required
                    name="title"
                    label="Title"
                    variant="outlined"
                    inputRef={register({required: true})}
                />
                <TextField
                    required
                    multiline
                    rows={3}
                    name="text"
                    label="Text"
                    variant="outlined"
                    inputRef={register({required: true})}
                />
                <Button className="Button" variant="contained" color="primary" type="submit">add todo</Button>
            </StyledTodoForm>
        </StyledContainer>
    )
}

export default AddTodoForm