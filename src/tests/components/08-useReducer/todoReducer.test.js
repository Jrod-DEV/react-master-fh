import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <todoReducer />', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should add one TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender SASS',
      done: false,
    };
    const action = {
      type: 'add',
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
});
