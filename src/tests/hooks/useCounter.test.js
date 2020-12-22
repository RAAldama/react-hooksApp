import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Test on useCounter hook', () => {
    
    test('should return default values', () => {

        const { result } = renderHook( () => useCounter() );

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increase).toBe('function');
        expect(typeof result.current.decrease).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        
    })

    test('should had the counter on 100', () => {

        const { result } = renderHook( () => useCounter(100) );

        expect(result.current.counter).toBe(100);
        
    })

    test('should increment the counter by 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increase } = result.current;
        act( () => increase());

        const { counter } = result.current;
        expect(counter).toBe(101);

    })

    test('should decrement the counter by 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrease } = result.current;
        act( () => decrease());

        const { counter } = result.current;
        expect(counter).toBe(99);

    })

    test('should reset the counter', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increase, reset } = result.current;
        act( () => {
            increase();
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);

    })

})
