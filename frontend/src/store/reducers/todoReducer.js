const INITIAL_STATE = {
  todos: [],
  currTodo: null,
  // filterBy: null
}
export function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.todos }
    //   case 'SET_FILTER_BY':
    //     return {
    //       ...state,
    //       filterBy: action.filterBy
    //     }
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.todo] }
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo._id !== action.todoId) }
    case 'UPDATE_TODO':
      console.log('action.todo',action.todo);
      const todos = state.todos.map(todo => (todo._id === action.todo._id) ? action.todo : todo)
      console.log('1210',todos);
      return {...state,todos}
    default:
      return state
  }
}