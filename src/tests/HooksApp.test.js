import { shallow } from 'enzyme';
import HooksApp from '../HooksApp';

describe('Test on <HooksApp />', () => {
    
    test('should show <HooksApp /> correctly', () => {
        
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();

    })
    

})
