import { shallow } from "enzyme"
import TodoListItem from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos"

describe('tests on <TodoListItem />', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoListItem 
            key={demoTodos[0].id} 
            todo={demoTodos[0]} 
            index={0} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
        />
    )
    
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should called the handleDelete function', () => {
        wrapper.find('button').simulate('click');

        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    })

    test('should called the handleToggle function', () => {
        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    })
    
    test('should show the correct text', () => {
        expect( wrapper.find('p').text() ).toEqual('1: Aprender React')
    })

    test('should have the class complete if TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                key={todo.id} 
                todo={todo} 
                index={0} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
})
