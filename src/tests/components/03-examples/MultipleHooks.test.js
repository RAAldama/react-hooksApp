import { shallow } from "enzyme"
import MultipleHooks from "../../../components/03-examples/MultipleHooks"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests on <MultipleHooks />', () => {

    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            counter: 10,
            increase: () => {}
        });
 
    });

    test('should render correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show the information correctly', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Albus',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleHooks />);
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('p').text().trim() ).toBe('Hola Mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Albus');

    })
    
})
