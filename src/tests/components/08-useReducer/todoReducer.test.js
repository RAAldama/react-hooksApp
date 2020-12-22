import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('tests on todoReducer', () => {
    
    test('should return the default state', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    })

    test('should add a todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender UI',
            done: false
        };

        const state = todoReducer(demoTodos, {type: 'add', payload: newTodo});

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
        
    })
    
    test('should delete a todo', () => {
        const state = todoReducer(demoTodos, {type: 'delete', payload: 1});

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    })
    
    test('should make the toggle of a todo', () => {
        const state = todoReducer(demoTodos, {type: 'toggle', payload: 1});

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    })
    
})
