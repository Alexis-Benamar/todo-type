import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, TextField } from '@material-ui/core'

import StyledContainer from '~styles/StyledContainer'
import { StyledTodoForm } from './styles'
import { useTodos } from '~providers/TodosProvider'

interface IAddTodoForm {
    className: string,
}

const AddTodoForm: React.FC<IAddTodoForm> = ({ className }) => {
    const { dispatch } = useTodos()
    const { register, handleSubmit, reset } = useForm()
    const { t } = useTranslation()

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
                    label={t('form.title')}
                    variant="outlined"
                    inputRef={register({required: true})}
                />
                <TextField
                    multiline
                    rows={3}
                    name="text"
                    label={t('form.text')}
                    variant="outlined"
                    inputRef={register}
                />
                <Button className="Button" variant="contained" color="primary" type="submit">
                    {t('form.submit')}
                </Button>
                <Button className="Button" variant="contained" color="secondary" onClick={() => dispatch({type: 'clear'})}>
                    {t('form.clear')}
                </Button>
            </StyledTodoForm>
        </StyledContainer>
    )
}

export default AddTodoForm