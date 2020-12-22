import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test on useForm hook', () => {
    
    const initialForm = {
        name: 'Albus',
        email: 'lol@lol.com'
    };

    test('should return a form by defect', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    })

    test('should change the value of the form (change name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        const target = {target: {name: 'name', value: 'owo'}};
        act( () => handleInputChange( target ));

        const [ formValues ] = result.current;
        expect(formValues).toEqual({email:'lol@lol.com', name: 'owo'});

    })

    test('should reset the form', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        const target = {target: {name: 'name', value: 'owo'}};
        act( () => {
            handleInputChange( target );
            reset()
        });

        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialForm);

    })

})
