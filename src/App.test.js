import Enzyme,{shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18"
import renderer from "react-test-renderer"
import FavPoke from "./components/FavPoke"
import Header from "./components/Header";
Enzyme.configure({adapter:new Adapter()})

it("displays the card according to props",()=>{
    const component = renderer.create(<FavPoke/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})
 
it("check with enzyme",()=>{
    const header = shallow(<Header/>)
    expect(header.text()).toBe("home")
})
