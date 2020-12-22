import { shallow } from "enzyme"
import RealRef from "../../../components/04-useRef/RealRef"

describe('tests on <RealRef />', () => {

    test('should show correctly', () => {
        const wrapper = shallow(<RealRef />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show the <MultipleHooks /> correctly', () => {
        const wrapper = shallow(<RealRef />);
        wrapper.find('button').simulate('click');

        expect( wrapper.find('MultipleHooks').exists() ).toBe(true);
    })
    
    
})
