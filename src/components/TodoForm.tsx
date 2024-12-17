import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Fab, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

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

    const onDelete = () => {
        if (window.confirm(t('form.confirmDelete'))) {
            dispatch({type: 'clear'})
        }
    }

    return (
        <TodoFormContainer onSubmit={handleSubmit(onSubmit)}>
            <TextField
                required
                label={t('form.title')}
                {...register("title", { required: true })}
            />
            <TextField
                label={t('form.text')}
                {...register('text')}
            />
            <div className="form-actions">
                <Fab className="Button btn-add" color="secondary" type="submit">
                    <AddIcon/>
                </Fab>
                <Fab className="Button btn-delete" onClick={onDelete} disabled={state.todos.length === 0}>
                    <DeleteIcon/>
                </Fab>
            </div>
        </TodoFormContainer>
    )
}

export default TodoForm