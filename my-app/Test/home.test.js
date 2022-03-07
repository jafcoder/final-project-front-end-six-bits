import { render, fireEvent } from "@testing-library/react";
import Home from "../pages/index"



const testProps = {
    buttonText: "Get Started",
    home: jest.fn()

}

test("test that the buttontext has the same input in the DOM", ()=> {
    const { getByText } = render(<Home {...testProps}/>)
    const actual = getByText("Get Started")
    expect(actual).toBeInTheDocument();
})

// test("test that Link is called when a onclick happens", ()=> {
//     const { getByText } = render(<Home {...testProps}/>)
//     const button = getByText("Get Started")
//     fireEvent.click(button);
//     expect(testProps.home).toHaveBeenCalled();
// })