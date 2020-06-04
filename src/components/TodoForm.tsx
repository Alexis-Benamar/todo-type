import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Fab, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

import { useTodos } from '~providers/TodosProvider'

interface IAddTodoForm {
    className: string,
}

const TodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }

  .form-actions {
      display: flex;
      align-items: center;
      justify-content: center;

      Button:not(:last-child) {
          margin-right: 32px;
      }
  }
`

const TodoForm: React.FC<IAddTodoForm> = ({ className }) => {
    const { state, dispatch } = useTodos()
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
        <TodoFormContainer onSubmit={handleSubmit(onSubmit)}>
            <TextField
                required
                name="title"
                label={t('form.title')}
                inputRef={register({required: true})}
            />
            <TextField
                name="text"
                label={t('form.text')}
                inputRef={register}
            />
            <div className="form-actions">
                <Fab className="Button btn-add" color="secondary" type="submit">
                    <AddIcon/>
                </Fab>
                <Fab className="Button btn-delete" onClick={() => dispatch({type: 'clear'})} disabled={state.todos.length === 0}>
                    <DeleteIcon/>
                </Fab>
            </div>
        </TodoFormContainer>
    )
}

export default TodoForm