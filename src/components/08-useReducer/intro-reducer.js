// Estado inicial
const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

// Reducer, que si no recibe ningun argumento va a ser igual a initialState. 
// También recibe action, que es quien va a modificar el state. Es la única manera de modicar el state.
// Siempre debe regresar un nuevo estado. <<return state>>, else queda fuera siempre ya que va en contra de las reglas de los reducers.

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'add') {
    return [...state, action.payload];
  }
  return state;
};

// Nuevo listado de todos
let todos = todoReducer();

// No usar .push cuando estamos trabajando en React

// Agregar nuevo todo
const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

// Tengo que mandar de alguna manera newTodo a todoReducer mediante action

// Agregar el todo mediante un action
const addTodoAction = {
  type: 'add',
  payload: newTodo, // payload es lo que quiero insertar
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
