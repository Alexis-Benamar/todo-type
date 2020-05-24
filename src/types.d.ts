type TodoType = {
    title: string
    text: string
    complete: boolean
}

type ToggleTodoType = (selectedTodo: TodoType) => void

type AddTodoHandlerType = (newTodo: TodoType) => void

type RemoveTodoHandlerType = (deletedTodo: number) => void