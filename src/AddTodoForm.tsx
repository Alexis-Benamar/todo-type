import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'

interface IAddTodoForm {
    addTodoHandler: AddTodoHandlerType
}

const AddTodoForm: React.FC<IAddTodoForm> = ({ addTodoHandler }) => {
    const {register, errors, handleSubmit, reset} = useForm()

    const onSubmit = (data: any) => {
        reset()
        addTodoHandler({
            ...data,
            complete: false
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    required
                    name="title"
                    label="Title"
                    inputRef={register({required: true})}
                />
            </div>
            <div>
                <TextField
                    required
                    multiline
                    name="text"
                    label="Text"
                    inputRef={register({required: true})}
                />
            </div>
            <Button variant="contained" color="primary" type="submit">add todo</Button>
        </form>
    )
}

export default AddTodoForm