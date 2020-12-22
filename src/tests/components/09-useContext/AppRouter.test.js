import { mount } from "enzyme"
import AppRouter from "../../../components/09-useContext/AppRouter"
import { UserContext } from "../../../components/09-useContext/UserContext"

describe('tests on <AppRouter />', () => {
    
    const user = {
        name: 'Albus',
        email: 'lol@lol.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    

})
