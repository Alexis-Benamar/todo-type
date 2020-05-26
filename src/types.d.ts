type AddTodoHandlerType = (state, newTodo: TodoType) => void

type RemoveTodoHandlerType = (state, deletedTodo: number) => void

type TodoType = {
    title: string
    text: string
    idx: number
    complete: boolean
}

type ToggleTodoType = (state, selectedTodo: TodoType) => void