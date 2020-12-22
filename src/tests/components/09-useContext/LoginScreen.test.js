import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('tests on <LoginScreen />', () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should execute the setUser with the correct arguments', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({id: 1234, name: 'Albus'});
    });
})
