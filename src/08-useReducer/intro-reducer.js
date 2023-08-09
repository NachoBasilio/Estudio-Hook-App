const initalState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]


const todoReducer = (state = initalState, action = {}) => {

    if (action?.type === 'add todo') {
        return [...state, action.payload];
    }

    return state;
}
let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addTodoAction = {
    type: 'add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);