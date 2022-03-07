import React from "react"
import Browse from "/pages/browse.js"

const testProps ={
    list: "list-item",
    tickItem: jest.fn()
}

test("test that the list contains the correct number of components", () => {
    const { getAllTestById } = render(<Browse {...testProps}/>)
    const actual = getAllTestById("list-item")
    expect(actual).toHaveLength(testProps.list.length);
})