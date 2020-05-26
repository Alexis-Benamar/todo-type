import React, { useContext, useReducer } from 'react'

type State = {
    todos: TodoType[]
}

type Action =
    | { type: 'add', newTodo: TodoType }
    | { type: 'remove', idx: number }
    | { type: 'toggle', todo: TodoType }

type TodosContextType = {
    state: State
    dispatch: React.Dispatch<Action>
} | undefined

const initialState = {
    todos: []
}

const todosReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'add':
            return { todos: [...state.todos, action.newTodo] }
        case 'remove':
            return { todos: state.todos.filter((todo) => action.idx !== todo.idx) }
        case 'toggle':
            return { todos: state.todos.map(todo => {
                if (todo === action.todo) {
                    return {
                    ...todo,
                    complete: !todo.complete
                    }
                }
                return todo
            })} 
        default:
            return state
    }
}

const TodosContext = React.createContext<TodosContextType>(undefined)

const useTodos = () => {
    const context = useContext(TodosContext)
    if (!context) {
        throw new Error('Cannot fetch Todos Context')
    }
    return context
}

const TodosProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(todosReducer, initialState)

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            {children}
        </TodosContext.Provider>
    )
}

export { useTodos }
export default TodosProvider